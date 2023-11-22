import { useState } from "react";
import "./App.css";
import LocationInput from "./components/LocationInput";
import Map from "./components/Map";
import axios from "axios";
import osmtogeojson from "osmtogeojson";

function App() {
  const [geojsonData, setGeojsonData] = useState(null);

  const fetchData = async (coordinates) => {
    try {
      // Ensure valid latitude and longitude ranges
      const validLat = Math.min(90, Math.max(-90, coordinates.lat));
      const validLon = Math.min(180, Math.max(-180, coordinates.lon));

      // Ensure minima are less than maxima
      const bboxSize = 0.1;
      const bbox = {
        minLat: validLat - bboxSize / 2,
        minLon: validLon - bboxSize / 2,
        maxLat: validLat + bboxSize / 2,
        maxLon: validLon + bboxSize / 2,
      };

      const response = await axios.get(
        `https://www.openstreetmap.org/api/0.6/map?bbox=2.27035,48.836,2.27935,48.843`
      );

      // Assuming the response.data is in "osm" format
      // You might need to handle the actual response structure
      const geojson = osmtogeojson(response.data);
      setGeojsonData(geojson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>GeoJSON Map App</h1>
      <LocationInput onLocationSubmit={fetchData} />
      <Map geojsonData={geojsonData} />
    </div>
  );
}

export default App;
