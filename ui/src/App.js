import './App.css';

import Map from './Map';

function App() {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, California.',
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div className="App">
      <header className="App-header">
         <Map location={location} zoomLevel={17} />
      </header>
    </div>
  );
}

export default App;
