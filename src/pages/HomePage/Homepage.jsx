import React from "react";
import Flexible from "../../components/Flexible/Flexible";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import MinimumLivingCost from "../../components/MinimumLivingCost/MinimumLivingCost";
import styles from "./homepage.module.css";
const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <MinimumLivingCost />
      <List />
      <Flexible />
    </div>
  );
};

export default Homepage;
