import React from "react";
import styles from "./Pricing.module.css";
const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <h5>Pricing</h5>
      <div classNAme={styles.pricingContainer}>
        <span>Price</span>
        <span>$</span>
        <input
          type="number"
          name="homePrice"
          id="homePrice"
          aria-label="Home Price"
        />
      </div>
      <h5>Additional pricing options</h5>
      <div>
        <input
          type="checkbox"
          name="cleaningFee"
          id="cleaningFee"
          aria-label="cleaning fee"
        />
        <label htmlFor="cleaningFee">Cleaning Fee</label>
      </div>
      <div classNAme={styles.pricingContainer}>
        <span>$</span>
        <input
          type="number"
          name="cleaningPrice"
          id="cleaningPrice"
          aria-label="cleaning Price"
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="securityFee"
          id="securityFee"
          aria-label="security fee"
        />
        <label htmlFor="securityFee">Security Fee</label>
      </div>
    </div>
  );
};

export default Pricing;
