import React from "react";
import styles from "./Success.module.css";
import successLogo from "../../../MinimumLivingCost/components/features/assets/logo5.svg";

const Success = ({ children }) => {
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
export default Success;