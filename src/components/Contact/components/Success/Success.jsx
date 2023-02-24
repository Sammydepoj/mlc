import React, { useState, useEffect } from "react";
import styles from "./Success.module.css";
import successLogo from "../../../MinimumLivingCost/components/features/assets/logo1.svg";
import Button from "../../../Button/Button";

const Success = ({ children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {}, []);
  const closeModalHandler = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <>
      <div
        onClick={closeModalHandler}
        className={
          isNavExpanded
            ? `${styles.overlay} ${styles.display}`
            : ` ${styles.hidden}`
        }
      >
        <div
          className={
            isNavExpanded
              ? `${styles.container} ${styles.display}`
              : `${styles.hidden}`
          }
        >
          <div className={styles.content}>
            <p>{children}</p>
            <img src={successLogo} alt="form submission confirmed !" />
          </div>
        </div>
        <Button onClick={closeModalHandler}>Okay!</Button>
      </div>
    </>
  );
};

export default Success;
