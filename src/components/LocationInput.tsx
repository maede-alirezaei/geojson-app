import { useState } from 'react';

const LocationInput = ({ onLocationSubmit }) => {
  const [coordinates, setCoordinates] = useState('');

  const handleSubmit = () => {
    // Assuming coordinates are entered as latitude and longitude
    const [lat, lon] = coordinates.split(',').map(coord => coord.trim());
    onLocationSubmit({ lat, lon });
    console.log(lat,lon)
  };


  return (
    <div>
      <label>
        Enter Coordinates (lat, lon):
        <input
          type="text"
          value={coordinates}
          onChange={(e) => setCoordinates(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LocationInput;