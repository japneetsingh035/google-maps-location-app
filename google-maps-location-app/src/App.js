import React from 'react';
import MapComponent from './components/MapComponent';
import './App.css';  // Import your main CSS

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Location Marker and Street View Capture</h1>
      </header>
      <MapComponent />
    </div>
  );
}

export default App;
