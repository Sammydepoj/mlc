import React, { useState } from "react";
import styles from "./Navlogo.module.css";
import logo from "./assets/logo.svg";
import Button from "../Button/Button";

const NavLogo = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.navlogo}>
      <div className="logo">
        <img src={logo} alt="page logo" />
      </div>
      <div
        onClick={() => {
          setIsNavExpanded(false);
        }}
        className={
          isNavExpanded
            ? `${styles.modalOverlay} ${styles.ulexpanded}`
            : styles.modalOverlay
        }
      ></div>
      <div className="nav">
        <ul
          className={
            isNavExpanded ? `${styles.ul} ${styles.ulexpanded}` : styles.ul
          }
          id="nav"
        >
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
          <Button className={styles.btn} value={"Login"}></Button>
          <Button className={styles.btn} value={"Sign Up"}></Button>
        </ul>
        <button
          className={styles.harmburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
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
