import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import { getGenreIcon } from './icons/genreMapper';

import LocationPin from "./LocationPin";

const SC = {};

function Map({ events, zoomLevel, genres }) {
  console.log(events);
  return (
    <SC.MapContainer>
      <SC.Header>Find Music NYC</SC.Header>

      <SC.GoogleMapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDS00yL6zBm6K8RX7XTh9yYzpxFNp6eZZM' }}
          defaultCenter={{
            lat: 40.746753122504174,
            lng: -73.98557128020252,
          }}
          defaultZoom={zoomLevel}
        >
          {events.map(event => (
            <LocationPin
              key={event.id}
              lat={event.location.lat}
              lng={event.location.lng}
              text={event.displayName}
              genre={genres[event.id]}/>
          ))}
        </GoogleMapReact>
      </SC.GoogleMapWrapper>
    </SC.MapContainer>
  )
}

SC.MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

SC.Header = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
`;

SC.GoogleMapWrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

export default Map;
