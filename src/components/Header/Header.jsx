import React from "react";
import NavLogo from "../NavbarAndLogo/NavLogo";
import searchIcon from "./assests/searchIcon.png";
import styles from "./header.module.css";
import Leaflet from "./Map/Leaflet";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLogo />
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroH1}>
            The most affordable place to stay in the san franciso bay area
          </h1>
        </div>
        <div className={styles.heroImg}>
          <p>click on the map to view your current location</p>
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
              <img src={searchIcon} alt="search based on your location" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
