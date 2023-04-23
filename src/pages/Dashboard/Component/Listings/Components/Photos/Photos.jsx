import React from "react";
import styles from "./Photos.module.css";
import Button from "../Button/Button";

const Photos = () => {
  return (
    <div className={styles.photos}>
      <h5>Photos</h5>
      <div className={styles.fileInputWrapper}>
        <input type="file" name="photo" id="photo" aria-label="photo" />
        <Button value={"Upload"}></Button>
        <p>Width 640px and height 320px</p>
      </div>
      <h5>Videos</h5>
      <div className={styles.fileInputWrapper}>
        <input type="file" name="video" id="video" aria-label="video" />
        <Button value={"Upload"}></Button>
        <p>Width 640px and height 320px</p>
      </div>
    </div>
  );
};

export default Photos;
