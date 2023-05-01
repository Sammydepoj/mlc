import React, { useEffect } from "react";
import styles from "./Pricing.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../Animation/Animate";

const Pricing = ({ formData, setFormData, errors }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
   const control = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
     if (inView) {
       control.start("visible");
     } else {
       control.start("hidden");
     }
   }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="visible"
      animate={control}
      className={styles.pricing}
    >
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
        {errors.homePrice && (
          <span className={styles.error}>{errors.homePrice}</span>
        )}
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
        {errors.cleaningPrice && (
          <span className={styles.error}>{errors.cleaningPrice}</span>
        )}
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
    </motion.div>
  );
};

export default Pricing;
