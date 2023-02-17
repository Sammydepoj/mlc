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
          <Leaflet />
          <div className={styles.filterHero}>
            <select name="All Type" id="Alltype">
              <option value="All Type">All Type</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div className={styles.searchBox}>
              <select name="Neighborhood" id="Neighborhood">
                <option value="Neighborhood">Neighborhood</option>
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
