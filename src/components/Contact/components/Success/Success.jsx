import React from "react";
import styles from "./Success.module.css";

const Success = ({ children }) => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export default Success;
