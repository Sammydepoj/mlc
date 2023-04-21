import React from "react";

import styles from "./Description.module.css";

const Description = ({ formData, setFormData }) => {
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  return (
    <div className={styles.description}>
      <p className={styles.descriptionHeading}>Description</p>
      <div className={styles.inputLabelWrapper}>
        <label htmlFor="listingName">Listing Name</label>
        <input
          type="text"
          name="listingName"
          id="listingName"
          placeholder="2 bed room apartments in CharlotteVille"
          value={formData.listingName}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputLabelWrapper}>
        <label htmlFor="summary">Summary</label>
        <textarea
          name="summary"
          id="summary"
          cols="30"
          rows="10"
          placeholder="The apartment can accommodate at most 6 
people, It has 2 Bedrooms........"
          value={formData.summary}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Description;
