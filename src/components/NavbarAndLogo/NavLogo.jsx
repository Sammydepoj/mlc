import React, { useState } from "react";
import styles from "./Navlogo.module.css";
import logo from "./assets/logo.svg";

// const closeMenu = () => {
//   let nav = document.getElementById("nav");
//   nav.style.display = "none";
// };

const NavLogo = () => {
  const [MenuShow, setMenuShow] = useState(false);

  const showMenu = () => {
    setMenuShow(true);
    
    let nav = document.getElementById("nav");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  };

  return (
    <div className={styles.navlogo}>
      <div className="logo">
        <img src={logo} alt="page logo" />
      </div>
      <div className="nav">
        <ul className={styles.ul} id="nav">
          <li className={styles.li}>
            <a href="#">Home</a>
          </li>
          <li className={styles.li}>
            <a href="#">Landlord</a>
          </li>
          <li className={styles.li}>
            <a href="#">Tenants</a>
          </li>
          <li className={styles.li}>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <button className={styles.harmburger} onClick={showMenu}>
          Open Modal
        </button>
      </div>
    </div>
  );
};
export default NavLogo;
