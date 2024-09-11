// src/components/MapComponent.js
import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '850px',
  borderRadius: '15px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden'
};

const center = {
  lat: 45.4215,  // Default coordinates
  lng: -75.6972
};

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const autocompleteRef = useRef(null);

  // Handle map click
  const handleMapClick = useCallback((e) => {
    setMarkers([...markers, { lat: e.latLng.lat(), lng: e.latLng.lng() }]);
  }, [markers]);

  // Handle place selection from search
  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry) {
      const location = place.geometry.location;
      setMarkers([...markers, { lat: location.lat(), lng: location.lng() }]);
      map.panTo({ lat: location.lat(), lng: location.lng() });
      map.setZoom(14); // Zoom in after search
    }
  };

  const handleSaveLocation = () => {
    // Save marker information to local storage or any backend service
    const savedMarkers = JSON.stringify(markers);
    localStorage.setItem('savedMarkers', savedMarkers);
    alert('Location saved successfully!');
  };


  return (
    <div className="map-container">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={['places']}  // Include 'places' library
      >
        <div className="map-controls">
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceSelect}
          >
            <input
              type="text"
              placeholder="Search for a location"
            />
          </Autocomplete>
          <button onClick={handleSaveLocation}>Save Location</button>
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleMapClick}
          onLoad={(map) => setMap(map)}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
