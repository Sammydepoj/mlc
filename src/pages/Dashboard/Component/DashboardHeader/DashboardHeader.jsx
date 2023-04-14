import React from "react";
import styles from "./DashboardHeader.module.css";

import logo from "./assets/logo.svg";
import userImg from "./assets/user.svg";

import { FaRegBell } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const DashboardHeader = ({ userName, email }) => {
  return (
    <div className={styles.dashboardHeader}>
      <img src={logo} alt="dashboard logo for the brand" />

      <div className={styles.icons}>
        <FaRegBell className={styles.dashboardHeaderIcon} />
        <AiOutlineInfoCircle className={styles.dashboardHeaderIcon} />
      </div>
      <div className={styles.userSummary}>
        <div>
          <h4>{userName.split(" ").splice(-2).join(" ")}</h4>
          <p>{email}</p>
        </div>
        <div className={styles.userIconWrapper}>
          <img src={userImg} alt="user of the application avatar" />
          <span className={styles.indicator}></span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
