import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { GeoJsonData } from "../App";
interface MapProps {
  geojsonData?: GeoJsonData | null;
}
const Map = ({ geojsonData }: MapProps) => {
  return (
    <MapContainer
      style={{ height: "500px", width: "100%" }}
      center={[0,0]}
      zoom={1.5}
      
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geojsonData && <GeoJSON data={geojsonData}/>}
    </MapContainer>
  );
};

export default Map;
