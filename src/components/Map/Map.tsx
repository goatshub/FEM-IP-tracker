import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import mapStyles from "./map.module.scss";
import { useContext } from "react";
import { IpContext } from "@/context/IpContext";
import { IpContextType } from "@/types/ipContext";
import LocationMarker from "./LocationMarker";

const Map = () => {
  const { IpData } = useContext(IpContext) as IpContextType;
  if (IpData) {
    const { lat, lon } = IpData;
    return (
      <>
        <MapContainer
          className={`${mapStyles.map}`}
          center={[lat, lon]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker {...IpData} />
        </MapContainer>
      </>
    );
  }
};
export default Map;
