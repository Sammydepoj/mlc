import React, { useState } from "react";
import styles from "./Navlogo.module.css";
import logo from "./assets/logo.svg";

// const closeMenu = () => {
//   let nav = document.getElementById("nav");
//   nav.style.display = "none";
// };

const NavLogo = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const showMenu = () => {
    () => {
      setIsNavExpanded(!isNavExpanded);
    };

    let nav = document.getElementById("nav");
    // MenuShow ? (nav.style.display = "none") : (nav.style.display = "block") ;
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default NavLogo;
