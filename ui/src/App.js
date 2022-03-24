import { useState, useEffect } from 'react';
import styled from 'styled-components'

import Map from './Map';

const SC = {};

function App() {
  const [events, setEvents] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setEvents(data.events);
        setGenres(data.genres);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <SC.App>
      <SC.Header>
        <Map events={events} zoomLevel={12} />
      </SC.Header>
    </SC.App>
  );
}

SC.App = styled.div`
  text-align: center;
`

SC.Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
