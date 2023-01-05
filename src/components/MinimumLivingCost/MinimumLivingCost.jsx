import React from "react";
import styles from "./minimumlivingcost.module.css";
import featuresImage from "./assets/minimumliving cost.png";
import Features from "./components/features/Features";
const MinimumLivingCost = () => {
  return (
    <div className={styles.minimumlivingcost}>
      <h2 className={styles.heading2}>
        minimum living cost takes care of everything
      </h2>
      <div className={styles.imageAndFeatures}>
        <div className={styles.imageAndFeaturesImage}>
          <img src={featuresImage} alt="features heading" />
        </div>
        <Features />
      </div>
    </div>
  );
};
export default MinimumLivingCost;
