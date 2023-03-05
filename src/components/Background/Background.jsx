import React from "react";
import Footer from "../Footer/Footer";
import styles from "./Background.module.css";

const Background = ({ children }) => {
  return (
    <>
      <div className={`${styles.background}`}>{children}</div>
      <Footer />
    </>
  );
};

export default Background;
