import React, { useEffect } from "react";
import styles from "./ListYourSpace.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../Animation/Animate";

const ListYourSpace = ({ formData, setFormData, errors }) => {
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
      className={styles.dashboardForm}
      ref={ref}
      variants={boxVariant}
      initial="visible"
      animate={control}
    >
      <label htmlFor="apartmentType">Apartment Type</label>
      <select
        name="apartmentType"
        id="apartmentType"
        placeholder="1 Room Apartment"
        value={formData.apartmentType}
        onChange={handleChange}
      >
        <option value="">--------</option>
        <option value="1_room_apartment">1 Room Apartment</option>
        <option value="2_room_apartment">2 Room Apartment</option>
        <option value="3_room_apartment">3 Room Apartment</option>
        <option value="4_room_apartment">4 Room Apartment</option>
        <option value="5_room_apartment">5 Room Apartment</option>
      </select>
      {errors.apartmentType && (
        <span className={styles.error}>{errors.apartmentType}</span>
      )}
      <label htmlFor="residentCount">Resident Count </label>
      <select
        name="residentCount"
        id="residentCount"
        placeholder="2"
        value={formData.residentCount}
        onChange={handleChange}
      >
        <option value="">-------</option>
        <option value="1">1 </option>
        <option value="2">2 </option>
      </select>
      {errors.residentCount && (
        <span className={styles.error}>{errors.residentCount}</span>
      )}
      <label htmlFor="location">Location </label>
      <select
        name="location"
        id="location"
        placeholder="Challorte Ville"
        value={formData.location}
        onChange={handleChange}
      >
        <option value="">------ </option>
        <option value="Yaba">Yaba </option>
        <option value="Lekki">Lekki </option>
        <option value="Makoko">Makoko </option>
        <option value="Surulere">Surulere </option>
      </select>
      {errors.location && (
        <span className={styles.error}>{errors.location}</span>
      )}
    </motion.div>
  );
};

export default ListYourSpace;
