import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { React, useEffect, useState } from "react";

const Leaflet = () => {
  const [lat, setLat] = useState(0.00);
  const [lng, setlng] = useState(0.00);
  const [status, setStatus] = useState(null);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating....");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setlng(position.coords.longitude);
        //   console.log(position.coords.latitude);
        //   console.log(position.coords.longitude);
        //   console.log(status);
          console.log(lng);
          console.log(lat);
          return [lat, lng];
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  //   getLocation();
  return (
    <MapContainer
      style={{ height: "250px", width: "100%", marginBottom: "2rem 0rem 2rem" }}
      center={[lat, lng]}
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
