import React from "react";
import Button from "../Button/Button";
import styles from "./list.module.css";
import image1 from "./assets/img1.png";
import image2 from "./assets/img2.png";
import image3 from "./assets/img3.png";
import image4 from "./assets/img4.png";
import image5 from "./assets/img5.png";
import image6 from "./assets/img6.png";
import bed from "./assets/Bed.svg";
import shower from "./assets/Shower.svg";
import size from "./assets/Path.svg";
import Card from "./components/Card";
import Pagination from "./Pagination/Pagination";
// import mlc from "./data.js";

const mlc = {
  homes: [
    {
      img: image1,
      id: "img1",
      name: "Private Room",
      price: "$1200/month",
      address: "2578 Folsom street, san francisco, CA, 94110",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image2,
      id: "img2",
      name: "Private Room",
      price: "$1200/month",
      address: "2578 Folsom street, san francisco, CA, 94110",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image3,
      id: "img3",
      name: "Private Room",
      price: "$1200/month",
      address: "2578 Folsom street, san francisco, CA, 94110",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image4,
      id: "img4",
      name: "Private Room",
      price: "$1200/month",
      address: "2578 Folsom street, san francisco, CA, 94110",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image5,
      id: "img5",
      name: "Private Room",
      price: "$1200/month",
      address: "2578 Folsom street, san francisco, CA, 94110",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image6,
      id: "img6",
      name: "Private Room",
      price: "$1200/month",
      address: "2578 Folsom street, san francisco, CA, 94110",
      bed: bed,
      shower: shower,
      size: size,
    },
  ],
};

const List = () => {
  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <h2 className={styles.listH2}>List of Properties</h2>
        <Button value={"View All Properties"}></Button>
      </div>
      <div className={styles.cardContainer}>
        {/* {console.log(mlc.homes.id)} */}

        {mlc.homes.map((home) => (
          <Card
            key={home.id}
            image={home.img}
            address={home.address}
            status={home.name}
            price={home.price}
            bed={home.bed}
            shower={home.shower}
            size={home.size}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default List;
