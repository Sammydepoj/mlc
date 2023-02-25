import React, { useState } from "react";
import styles from "./Failure.module.css";
import successLogo from "../../../MinimumLivingCost/components/features/assets/logo3.svg";

const Failure = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsModalOpen(false);
        }}
        className={
          isModalOpen
            ? `${styles.overlay} ${styles.display}`
            : `${styles.overlay} ${styles.hidden}`
        }
      >
        <div className={`${styles.container} ${styles.display}`}>
          <div className={styles.content}>
            <p>{children}</p>
            <img src={successLogo} alt="form submission confirmed !" />
          </div>
          <button
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            Okay Error !
          </button>
        </div>
      </div>
    </>
  );
};

export default Failure;
