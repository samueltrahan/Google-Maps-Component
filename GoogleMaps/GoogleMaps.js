import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

export default function GoogleMaps() {
  function Map() {
    return (
      <GoogleMap 
      defaultZoom={10},
      defaultCenter={{
        lat: 30.2672,
        lng: -97.7431
      }}
      />
    )
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div style={{width: '80vw', height: '100vh'}}>
       <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${YOUR_GOOGLE_API_KEY}`}
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '100vh'}} />}
        mapElement={<div style={{height: '100%'}} />}
        />
    </div>
  )
}
