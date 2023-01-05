import React from "react";
import NavLogo from "../NavbarAndLogo/NavLogo";
import heroMap from "./assests/heroMap.svg";
import styles from "./header.module.css";

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
          <div className={heroMap}>
            <img src={heroMap} alt="Houses map" />
          </div>
          <div className={styles.filterHero}>
            <select name="All Type" id="Alltype">
              <option value="All Type">All Type</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select name="Neighborhood" id="Neighborhood">
              <option value="Neighborhood">Neighborhood</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
