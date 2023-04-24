import React from "react";
import styles from "./Photos.module.css";
import Button from "../Button/Button";

const Photos = ({ formData, setFormData, errors }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.photos}>
      <h5>Photos</h5>
      <div className={styles.fileInputWrapper}>
        <div>
          <input
            type="file"
            name="photo"
            id="photo"
            aria-label="photo"
            // value={formData.photo}
            onChange={handleChange}
          />
          <Button value={"Upload"}></Button>
        </div>
        {errors.photo && <span className={styles.error}>{errors.photo}</span>}
        <p>Width 640px and height 320px</p>
      </div>
      <h5>Videos</h5>
      <div className={styles.fileInputWrapper}>
        <div>
          <input
            type="file"
            name="video"
            id="video"
            aria-label="video"
            // value={formData.video}
            onChange={handleChange}
          />
          <Button value={"Upload"}></Button>
        </div>
        {errors.video && <span className={styles.error}>{errors.video}</span>}
        <p>Width 640px and height 320px</p>
      </div>
    </div>
  );
};

export default Photos;
