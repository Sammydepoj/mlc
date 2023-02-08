import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./list.module.css";
import image1 from "./assets/img1.png";
import image2 from "./assets/img2.png";
import image3 from "./assets/img3.png";
import image4 from "./assets/img4.png";
import image5 from "./assets/img5.png";
import image6 from "./assets/img6.png";
import image7 from "./assets/img7.png";
import image8 from "./assets/img8.png";
import image9 from "./assets/img9.png";
import image10 from "./assets/img10.png";
import image11 from "./assets/img11.png";
import image12 from "./assets/img12.png";
import image13 from "./assets/img13.png";
import image14 from "./assets/img14.png";
import image15 from "./assets/img15.png";
import image16 from "./assets/img16.png";
import image17 from "./assets/img17.png";
import image18 from "./assets/img18.png";
import bed from "./assets/Bed.svg";
import shower from "./assets/Shower.svg";
import size from "./assets/Path.svg";
import Card from "./components/Card";
import Pagination from "./Pagination/Pagination";

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
    {
      img: image7,
      id: "img7",
      name: "Public Room",
      price: "$700/month",
      address: "Mushin area of lagos state",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image8,
      id: "img8",
      name: "Public Room",
      price: "$700/month",
      address: "Mushin area of lagos state",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image9,
      id: "img9",
      name: "Public Room",
      price: "$700/month",
      address: "Mushin area of lagos state",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image10,
      id: "img10",
      name: "Public Room",
      price: "$700/month",
      address: "Mushin area of lagos state",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image11,
      id: "img11",
      name: "Public Room",
      price: "$700/month",
      address: "Mushin area of lagos state",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image12,
      id: "img12",
      name: "Public Room",
      price: "$700/month",
      address: "Mushin area of lagos state",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image13,
      id: "img13",
      name: "Public Room",
      price: "$50/month",
      address: "Makoko area of lagos",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image14,
      id: "img14",
      name: "Public Room",
      price: "$50/month",
      address: "Makoko area of lagos",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image15,
      id: "img15",
      name: "Public Room",
      price: "$50/month",
      address: "Makoko area of lagos",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image16,
      id: "img16",
      name: "Public Room",
      price: "$50/month",
      address: "Makoko area of lagos",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image17,
      id: "img17",
      name: "Public Room",
      price: "$50/month",
      address: "Makoko area of lagos",
      bed: bed,
      shower: shower,
      size: size,
    },
    {
      img: image18,
      id: "img18",
      name: "Public Room",
      price: "$50/month",
      address: "Makoko area of lagos",
      bed: bed,
      shower: shower,
      size: size,
    },
  ],
};

const List = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(mlc.homes.slice(0, 6));

  const handlePageChange = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 6;
    const endIndex = startIndex + 6;
    setCurrentItems(mlc.homes.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };

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
      <Pagination
        totalItems={mlc.homes.length}
        itemsPerPage={6}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
export default List;
