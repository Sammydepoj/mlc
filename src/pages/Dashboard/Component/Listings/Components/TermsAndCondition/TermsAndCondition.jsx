import React, { useEffect } from "react";
import styles from "./TermsAndCondition.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../Animation/Animate";

const TermsAndCondition = ({ formData, setFormData, errors }) => {
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
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
      className={styles.termsAndCondition}
    >
      <h5>Terms and conditions</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        comm odo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatu r. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <div>
        <label htmlFor="agreeTermsAndCondition">
          <input
            type="checkbox"
            name="agreeTermsAndCondition"
            id="agreeTermsAndCondition"
            aria-label="agreeTermsAndCondition"
            className={styles.checkbox}
            value={formData.agreeTermsAndCondition}
            checked={formData.agreeTermsAndCondition}
            onChange={handleChange}
          />
          <span className={styles.checkmark}></span>I agree to the terms and
          conditions
        </label>
        <b>Read more</b>
      </div>
      {errors.agreeTermsAndCondition && (
        <span className={styles.error}>{errors.agreeTermsAndCondition}</span>
      )}
    </motion.div>
  );
};

export default TermsAndCondition;
