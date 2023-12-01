import { useState } from "react";
import "./LocationInput.css";
import InputField from "./InputField";

interface LocationInputProps {
  onLocationSubmit: (coordinates: Coordinates) => void;
}
export interface Coordinates {
  maxLat: number;
  minLat: number;
  maxLon: number;
  minLon: number;
}
const LocationInput = ({ onLocationSubmit }: LocationInputProps) => {
  const [coordinates, setCoordinates] = useState({
    maxLat: "",
    minLat: "",
    maxLon: "",
    minLon: "",
  });

  const handleSubmit = () => {
    const maxLat = parseFloat(coordinates.maxLat.trim());
    const minLat = parseFloat(coordinates.minLat.trim());
    const maxLon = parseFloat(coordinates.maxLat.trim());
    const minLon = parseFloat(coordinates.minLat.trim());
    if (!isNaN(maxLat) && !isNaN(maxLon) && !isNaN(minLat) && !isNaN(minLat)) {
      onLocationSubmit({ minLat, maxLat, maxLon, minLon });
    } else {
      alert("Please enter valid latitude and longitude values.");
    }
  };

  return (
    <div className="location-input-container">
      <InputField
        value={coordinates.minLat}
        label="Enter min Latitude:"
        onChange={(e) =>
          setCoordinates((prev) => {
            return { ...prev, minLat: e.target.value };
          })
        }
      />

      <InputField
        value={coordinates.minLon}
        label="Enter min Longitude:"
        onChange={(e) =>
          setCoordinates((prev) => {
            return { ...prev, minLon: e.target.value };
          })
        }
      />
      <InputField
        value={coordinates.maxLat}
        label="Enter max Latitude:"
        onChange={(e) =>
          setCoordinates((prev) => {
            return { ...prev, maxLat: e.target.value };
          })
        }
      />
      <InputField
        value={coordinates.maxLon}
        label="Enter max Longitude:"
        onChange={(e) =>
          setCoordinates((prev) => {
            return { ...prev, maxLon: e.target.value };
          })
        }
      />

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default LocationInput;
