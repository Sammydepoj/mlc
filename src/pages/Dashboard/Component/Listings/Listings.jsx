import React from "react";
import styles from "./Listings.module.css";

const Listings = () => {
  return (
    <div className={styles.listings}>
      <div>
        <div>
          <h2>
            List Your <span>Space</span>
          </h2>
          <p>Be rest assured we help you make money renting out your space</p>
        </div>
        <div className="">
          <form>
            <label htmlFor="apartmentType">Apartment Type</label>
            <select
              name="apartmentType"
              id="apartmentType"
              placeholder="1 Room Apartment"
            >
              <option value="1_room_apartment">1 Room Apartment</option>
              <option value="2_room_apartment">2 Room Apartment</option>
            </select>
            <label htmlFor="residentCount">Resident Count </label>
            <select name="residentCount" id="residentCount" placeholder="2">
              <option value="1">1 </option>
              <option value="2">2 </option>
            </select>
            <label htmlFor="location">Location </label>
            <select name="location" id="location" placeholder="Challorte Ville">
              <option value="1">1 </option>
              <option value="2">2 </option>
            </select>
            <button>Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Listings;
