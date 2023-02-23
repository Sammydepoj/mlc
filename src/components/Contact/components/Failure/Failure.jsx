import React, { useState } from "react";
import styles from "./Failure.module.css";

const Failure = ({ closeModal, children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsNavExpanded(false);
        }}
        className={
          isNavExpanded
            ? `${styles.overlay} ${styles.ulexpanded}`
            : styles.overlay
        }
      ></div>
      <div
        className={
          isNavExpanded
            ? `${styles.container} ${styles.ulexpanded}`
            : styles.container
        }
      >
        <p>{children}</p>
        {(closeModal = !isNavExpanded)}
      </div>
    </>
  );
};

export default Failure;
