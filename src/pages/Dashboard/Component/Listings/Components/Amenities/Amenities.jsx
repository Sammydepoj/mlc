import React from "react";
import styles from "./Amenities.module.css";

const Amenities = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
    <h5 className={styles.h5}>Amenities</h5>
    <div className={styles.amenities}>
      <label htmlFor="ac">
        <input
          type="checkbox"
          name="amenities"
          id="ac"
          aria-label="air conditioning"
          className={styles.checkbox}
          value={formData.amenities.ac}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>A C
      </label>

      <label htmlFor="couch">
        <input
          type="checkbox"
          name="couch"
          id="couch"
          aria-label="couch"
          className={styles.checkbox}
          value={formData.amenities.couch}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
        Couch
      </label>
      <label htmlFor="shower">
        <input
          type="checkbox"
          name="shower"
          id="shower"
          aria-label="shower"
          className={styles.checkbox}
          value={formData.amenities.shower}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
        Shower
      </label>
      <label htmlFor="heater">
        <input
          type="checkbox"
          name="heater"
          id="heater"
          aria-label="heater"
          className={styles.checkbox}
          value={formData.amenities.heater}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
        Heater
      </label>
      <label htmlFor="bathTub">
        <input
          type="checkbox"
          name="bathTub"
          id="bathTub"
          aria-label="bathTub"
          className={styles.checkbox}
          value={formData.amenities.bathTub}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
        Bath Tub
      </label>
      <label htmlFor="washingMachine">
        <input
          type="checkbox"
          name="washingMachine"
          id="washingMachine"
          aria-label="washingMachine"
          className={styles.checkbox}
          value={formData.amenities.washingMachine}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
        Washing Machine
      </label>
      <label htmlFor="tv">
        <input
          type="checkbox"
          name="tv"
          id="tv"
          aria-label="tv"
          className={styles.checkbox}
          value={formData.amenities.tv}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
       T V
      </label>
      <label htmlFor="wardrobe">
        <input
          type="checkbox"
          name="wardrobe"
          id="wardrobe"
          aria-label="wardrobe"
          className={styles.checkbox}
          value={formData.amenities.wardrobe}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
       Wardrobe
      </label>
      <label htmlFor="cleaner">
        <input
          type="checkbox"
          name="cleaner"
          id="cleaner"
          aria-label="cleaner"
          className={styles.checkbox}
          value={formData.amenities.cleaner}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
       Cleaner
      </label>
      <label htmlFor="gym">
        <input
          type="checkbox"
          name="gym"
          id="gym"
          aria-label="gym"
          className={styles.checkbox}
          value={formData.amenities.gym}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
       Gym
      </label>
      <label htmlFor="smokeDetector">
        <input
          type="checkbox"
          name="smokeDetector"
          id="smokeDetector"
          aria-label="smokeDetector"
          className={styles.checkbox}
          value={formData.amenities.smokeDetector}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
       Smoke Detector
      </label>
      <label htmlFor="fireExtinguisher">
        <input
          type="checkbox"
          name="fireExtinguisher"
          id="fireExtinguisher"
          aria-label="fireExtinguisher"
          className={styles.checkbox}
          value={formData.amenities.fireExtinguisher}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
       Fire Extinguisher
      </label>
      <label htmlFor="readingRoom">
        <input
          type="checkbox"
          name="readingRoom"
          id="readingRoom"
          aria-label="readingRoom"
          className={styles.checkbox}
          value={formData.amenities.readingRoom}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
       Reading Room
      </label>
      <label htmlFor="kitchen">
        <input
          type="checkbox"
          name="kitchen"
          id="kitchen"
          aria-label="kitchen"
          className={styles.checkbox}
          value={formData.amenities.kitchen}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
       Kitchen
      </label>
    </div>
    </>
  );
};

export default Amenities;
