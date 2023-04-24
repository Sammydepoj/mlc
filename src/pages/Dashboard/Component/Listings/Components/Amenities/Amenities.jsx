import React from "react";
import styles from "./Amenities.module.css";

const Amenities = ({ formData, setFormData, errors }) => {
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };
  return (
    <>
      <h5 className={styles.h5}>Amenities</h5>

      <div className={styles.amenities}>
        <label htmlFor="ac">
          <input
            type="checkbox"
            name="ac"
            id="ac"
            aria-label="air conditioning"
            className={styles.checkbox}
            value={formData.ac}
            checked={formData.ac}
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
            checked={formData.couch}
            value={formData.couch}
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
            checked={formData.shower}
            value={formData.shower}
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
            checked={formData.heater}
            value={formData.heater}
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
            checked={formData.bathTub}
            value={formData.bathTub}
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
            checked={formData.washingMachine}
            value={formData.washingMachine}
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
            checked={formData.tv}
            value={formData.tv}
            onChange={handleChange}
          />
          <span className={styles.checkmark}></span>T V
        </label>

        <label htmlFor="wardrobe">
          <input
            type="checkbox"
            name="wardrobe"
            id="wardrobe"
            aria-label="wardrobe"
            className={styles.checkbox}
            checked={formData.wardrobe}
            value={formData.wardrobe}
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
            checked={formData.cleaner}
            value={formData.cleaner}
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
            checked={formData.gym}
            value={formData.gym}
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
            checked={formData.smokeDetector}
            value={formData.smokeDetector}
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
            checked={formData.fireExtinguisher}
            value={formData.fireExtinguisher}
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
            checked={formData.readingRoom}
            value={formData.readingRoom}
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
            checked={formData.kitchen}
            value={formData.kitchen}
            onChange={handleChange}
          />
          <span className={styles.checkmark}></span>
          Kitchen
        </label>
        {errors.amenities && (
          <span className={styles.error}>{errors.amenities}</span>
        )}
      </div>
    </>
  );
};

export default Amenities;
