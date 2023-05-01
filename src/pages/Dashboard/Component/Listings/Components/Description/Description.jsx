import React, { useEffect } from "react";

import styles from "./Description.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../Animation/Animate";

const Description = ({ formData, setFormData, errors }) => {
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
      className={styles.description}
    >
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
      {errors.listingName && (
        <span className={styles.error}>{errors.listingName}</span>
      )}
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
      {errors.summary && <span className={styles.error}>{errors.summary}</span>}
    </motion.div>
  );
};

export default Description;
