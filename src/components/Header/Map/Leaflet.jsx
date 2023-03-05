import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { React, useEffect, useState } from "react";

const Leaflet = () => {
  const [lat, setLat] = useState(0.0);
  const [lng, setlng] = useState(0.0);

  // const GetLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setStatus("Locating....");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         //   setStatus(null);
  //         setLat(position.coords.latitude);
  //         setlng(position.coords.longitude);
  //         //   console.log(position.coords.latitude);
  //         //   console.log(position.coords.longitude);
  //         //   console.log(status);
  //         // console.log(lng);
  //         // console.log(lat);
  //         // console.log(status);
  //         return [lat, lng];
  //       },
  //       () => {
  //         setStatus("Unable to retrieve your location");
  //       }
  //     );
  //   }
  // };

  const [location, setLocation] = useState(null);

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
