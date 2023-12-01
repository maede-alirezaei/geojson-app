import { useState } from "react";
import "./App.css";
import LocationInput, { Coordinates } from "./components/LocationInput";
import Map from "./components/Map";
import axios from "axios";
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

  const fetchData = async (coordinates: Coordinates) => {
    setError("");
    setLoading(true);
    try {
      const bbox = {
        minLat: coordinates.minLat,
        minLon: coordinates.minLon,
        maxLat: coordinates.maxLat,
        maxLon: coordinates.maxLon,
      };
      console.log(bbox);
      const response = await axios.get(
        `https://www.openstreetmap.org/api/0.6/map?bbox=${bbox.minLon},${bbox.minLat},${bbox.maxLon},${bbox.maxLat}`
      );
      const geojson = osmtogeojson(response.data);
      console.log(geojson);
      setGeojsonData(geojson);
      setLoading(false);
    } catch (error : unknown) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data);
      } else {
        setError("An error occurred");
      }
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
