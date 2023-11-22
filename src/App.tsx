import { useState } from "react";
import "./App.css";
import LocationInput from "./components/LocationInput";
import Map from "./components/Map";
import axios, { AxiosError } from "axios";
import osmtogeojson from "osmtogeojson";
export interface GeoJsonData {
  type:
    | "Point"
    | "MultiPoint"
    | "LineString"
    | "MultiLineString"
    | "Polygon"
    | "MultiPolygon"
    | "GeometryCollection"
    | "Feature"
    | "FeatureCollection";
  features: unknown[];
}
function App() {
  const [geojsonData, setGeojsonData] = useState<GeoJsonData | null>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const fetchData = async (coordinates: { lat: number; lon: number }) => {
    setError("");
    setLoading(true);
    try {
      const validLat = Math.min(90, Math.max(-90, coordinates.lat));
      const validLon = Math.min(180, Math.max(-180, coordinates.lon));
      const bboxSize = 0.1;
      const bbox = {
        minLat: validLat - bboxSize / 2,
        minLon: validLon - bboxSize / 2,
        maxLat: validLat + bboxSize / 2,
        maxLon: validLon + bboxSize / 2,
      };
      console.log(bbox);
      const response = await axios.get(
        `https://www.openstreetmap.org/api/0.6/map?bbox=${bbox.minLon},${bbox.minLat},${bbox.maxLon},${bbox.maxLat}`
      );
      const geojson = osmtogeojson(response.data);
      setGeojsonData(geojson);
      setLoading(false);
    } catch (error: AxiosError) {
      setError(error.response?.data);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GeoJSON Map App</h1>
      <LocationInput onLocationSubmit={fetchData} />
      {!error ? (
        !loading ? (
          <Map geojsonData={geojsonData} />
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
}

export default App;
