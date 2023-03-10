import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { React, useEffect, useState } from "react";

const Leaflet = () => {
  const [location, setLocation] = useState({ lat: 6.5982, lng: 3.490249 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocation({ lat: latitude, lng: longitude });
      },
      () => {
        console.log("error occured");
      }
    );
    console.log(location);
  }, []);

  return (
    <MapContainer
      style={{ height: "250px", width: "83%" }}
      center={location}
      // center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
      {/* <Marker position={{ lat: 51.505, lng: -0.09 }}> */}

      {location && (
        <Marker position={location}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};
export default Leaflet;
