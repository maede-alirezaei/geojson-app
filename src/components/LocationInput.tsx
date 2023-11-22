import { useState } from "react";
import "./LocationInput.css";
import InputField from "./InputField";

interface LocationInputProps {
  onLocationSubmit: ({ lat, lon }: { lat: number; lon: number }) => void;
}

const LocationInput = ({ onLocationSubmit }: LocationInputProps) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleSubmit = () => {
    const latitude = parseFloat(lat.trim());
    const longitude = parseFloat(lon.trim());

    if (!isNaN(latitude) && !isNaN(longitude)) {
      onLocationSubmit({ lat: latitude, lon: longitude });
    } else {
      alert("Please enter valid latitude and longitude values.");
    }
  };

  return (
    <div className="location-input-container">
      <InputField
        label="Enter Latitude:"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />

      <InputField
        label="Enter Longitude:"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
      />

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default LocationInput;
