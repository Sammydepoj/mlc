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
    <div>
      <input
        type="checkbox"
        name="amenities"
        id="ac"
        aria-label="air conditioning"
        value={formData.amenities.ac}
        onChange={handleChange}
      />
      <label htmlFor="ac">A C</label>
      <input
        type="checkbox"
        name="couch"
        id="couch"
        aria-label="couch"
        value={formData.amenities.couch}
        onChange={handleChange}
      />
      <label htmlFor="couch">Couch</label>
      <input
        type="checkbox"
        name="shower"
        id="shower"
        aria-label="shower"
        value={formData.amenities.shower}
        onChange={handleChange}
      />
      <label htmlFor="shower">Shower</label>
    </div>
  );
};

export default Amenities;
