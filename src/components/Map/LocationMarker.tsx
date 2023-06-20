import { Marker, Popup, useMap } from "react-leaflet";
import Leaflet from "leaflet";
import { useEffect } from "react";
import { IpDataType } from "@/types/ipContext";

const LocationMarker = ({
  latitude: lat,
  longitude: lon,
  city,
}: IpDataType) => {
  const markerIcon = new Leaflet.Icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [45, 55],
    //     iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -30], //[left/right, top/bottom]
  });

  const map = useMap();

  useEffect(() => {
    map.flyTo([lat, lon], map.getZoom());
  }, [lat, lon, map]);

  return (
    <Marker position={[lat, lon]} icon={markerIcon}>
      <Popup>{city}</Popup>
    </Marker>
  );
};
export default LocationMarker;
