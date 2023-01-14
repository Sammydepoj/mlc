import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { useMapEvents } from "https://cdn.esm.sh/react-leaflet/hooks";
// import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";
import { React, useEffect, useState } from "react";

const Leaflet = () => {
  const [lat, setLat] = useState(0.0);
  const [lng, setlng] = useState(0.0);
  const [status, setStatus] = useState(null);
  const GetLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating....");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //   setStatus(null);
          setLat(position.coords.latitude);
          setlng(position.coords.longitude);
          //   console.log(position.coords.latitude);
          //   console.log(position.coords.longitude);
          //   console.log(status);
          console.log(lng);
          console.log(lat);
          console.log(status);
          //   return [lat, lng];
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  useEffect(() => {
    GetLocation();
  }, []);
  //   GetLocation();
  return (
    <MapContainer
      style={{ height: "250px", width: "83%" }}
      center={{ lat: lat, lng: lng }}
      //   center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Leaflet;
