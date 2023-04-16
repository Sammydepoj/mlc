import React from "react";

import styles from "./Location.module.css";
import Leaflet from "../../../../../../components/Header/Map/Leaflet";

import { BiSearch } from "react-icons/bi";

import Button from "../Button/Button";

const Location = () => {
  return (
    <div className={styles.location}>
      <p className={styles.descriptionHeading}>Description</p>
      <div>
        <div>
          <label htmlFor="state">State</label>
          <select name="state" id="state" placeholder="atlanta">
            <option value="london">London</option>
            <option value="atlanta">Atlanta</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
      </div>
      <div>
        <Leaflet />
        <div className={styles.filterHero}>
          <select name="All Type" id="Alltype">
            <option value="All Type">All Type</option>
            <option value="1_bedroom">1 Bedroom</option>
            <option value="2_bedrooms">2 Bedrooms</option>
            <option value="3_bedrooms">3 Bedrooms</option>
            <option value="4_bedrooms">4 Bedrooms</option>
          </select>
          <div className={styles.searchBox}>
            <select name="Neighborhood" id="Neighborhood">
              <option value="">Neighborhood</option>
              <option value="Makoko">Makoko</option>
              <option value="London">London</option>
              <option value="Mushin">Mushin</option>
              <option value="Lekki">Lekki</option>
            </select>
          </div>
          <BiSearch />
        </div>
        <p>Move the pointer to set the right map position.</p>
      </div>
      <div className={styles.btnsWrapper}>
        <Button value={"Back"}></Button>
        <Button value={"Continue"}></Button>
      </div>
    </div>
  );
};

export default Location;
