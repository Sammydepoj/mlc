import React from "react";
import styles from "./ListYourSpace.module.css";

const ListYourSpace = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className={styles.dashboardForm}>
      <label htmlFor="apartmentType">Apartment Type</label>
      <select
        name="apartmentType"
        id="apartmentType"
        placeholder="1 Room Apartment"
        value={formData.apartmentType}
        onChange={handleChange}
      >
        <option value="1_room_apartment">1 Room Apartment</option>
        <option value="2_room_apartment">2 Room Apartment</option>
        <option value="3_room_apartment">3 Room Apartment</option>
        <option value="4_room_apartment">4 Room Apartment</option>
        <option value="5_room_apartment">5 Room Apartment</option>
      </select>
      <label htmlFor="residentCount">Resident Count </label>
      <select
        name="residentCount"
        id="residentCount"
        placeholder="2"
        value={formData.residentCount}
        onChange={handleChange}
      >
        <option value="1">1 </option>
        <option value="2">2 </option>
      </select>
      <label htmlFor="location">Location </label>
      <select
        name="location"
        id="location"
        placeholder="Challorte Ville"
        value={formData.location}
        onChange={handleChange}
      >
        <option value="1">1 </option>
        <option value="2">2 </option>
      </select>
    </div>
  );
};

export default ListYourSpace;
