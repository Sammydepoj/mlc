import React from "react";
import styles from "./Pricing.module.css";
const Pricing = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className={styles.pricing}>
      <h5>Pricing</h5>
      <div className={styles.pricingContainer}>
        <span className={styles.price}>Price</span>
        <span className={styles.currency}>$</span>
        <input
          type="number"
          name="homePrice"
          id="homePrice"
          aria-label="Home Price"
          value={formData.homePrice}
          onChange={handleChange}
        />
      </div>

      <h5>Additional pricing options</h5>

      <div>
        <label htmlFor="cleaningFee">
          <input
            type="checkbox"
            name="cleaningFee"
            id="cleaningFee"
            aria-label="cleaning fee"
            className={styles.checkbox}
            // value={formData.cleaningFee}
            // onChange={handleChange}
          />
          <span className={styles.checkmark}></span>Cleaning Fee
        </label>
      </div>

      <div className={styles.additionalPricingContainer}>
        <span className={styles.currency}>$</span>
        <input
          type="number"
          name="cleaningPrice"
          id="cleaningPrice"
          aria-label="cleaning Price"
          value={formData.cleaningPrice}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="securityFee">
          <input
            type="checkbox"
            name="securityFee"
            id="securityFee"
            aria-label="security fee"
            className={styles.checkbox}
            // value={formData.securityFee}
            // onChange={handleChange}
          />
          <span className={styles.checkmark}></span>Security Fee
        </label>
      </div>
    </div>
  );
};

export default Pricing;
