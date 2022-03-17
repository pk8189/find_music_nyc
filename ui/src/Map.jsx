import GoogleMapReact from 'google-map-react'
import './map.css'

import LocationPin from "./LocationPin";

function Map({ location, zoomLevel }) {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h2 className="map-h2">Find Music NYC</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDS00yL6zBm6K8RX7XTh9yYzpxFNp6eZZM' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map;
