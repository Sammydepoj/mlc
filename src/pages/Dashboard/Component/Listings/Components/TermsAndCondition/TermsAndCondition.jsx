import React from "react";
import styles from "./TermsAndCondition.module.css";

const TermsAndCondition = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className={styles.termsAndCondition}>
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
        <label htmlFor="agree">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            aria-label="agree"
            className={styles.checkbox}
            value={formData.agree}
            onChange={handleChange}
          />
          <span className={styles.checkmark}></span>I agree to the terms and
          conditions
        </label>
        <b>Read more</b>
      </div>
    </div>
  );
};

export default TermsAndCondition;