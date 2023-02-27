import React, { useState } from "react";
import styles from "./Failure.module.css";
import successLogo from "../../../MinimumLivingCost/components/features/assets/logo3.svg";

const Failure = ({ children }) => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p>{children}</p>
            <img src={successLogo} alt="form submission confirmed !" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Failure;