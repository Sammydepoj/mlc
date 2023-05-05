import React, { useEffect } from "react";
import styles from "./Photos.module.css";
import Button from "../Button/Button";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../Animation/Animate";

const Photos = ({ formData, setFormData, errors }) => {
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
      className={styles.photos}
    >
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
          <Button value={"Upload"} type={"button"}></Button>
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
          <Button value={"Upload"} type={"button"}></Button>
        </div>
        {errors.video && <span className={styles.error}>{errors.video}</span>}
        <p>Width 640px and height 320px</p>
      </div>
    </motion.div>
  );
};

export default Photos;
