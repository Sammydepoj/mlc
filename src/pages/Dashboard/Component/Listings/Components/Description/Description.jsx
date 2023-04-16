import React from "react";

import styles from "./Description.module.css";
import Button from "../Button/Button";

const Description = ({ nextSectionHandler, prevSectionHandler }) => {
  const backButtonHandler = () => {
    prevSectionHandler();
  };
  const continueButtonHandler = () => {
    nextSectionHandler();
  };

  return (
    <div className={styles.description}>
      <p className={styles.descriptionHeading}>Description</p>
      <div className={styles.inputLabelWrapper}>
        <label htmlFor="listingName">Listing Name</label>
        <input
          type="text"
          name="listingName"
          id="listingName"
          placeholder="2 bed room apartments in CharlotteVille"
        />
      </div>
      <div className={styles.inputLabelWrapper}>
        <label htmlFor="summary">Summary</label>
        <textarea
          name="summary"
          id="summary"
          cols="30"
          rows="10"
          placeholder="The apartment can accommodate at most 6 
people, It has 2 Bedrooms........"
        ></textarea>
      </div>
      <div className={styles.btnsWrapper}>
        <Button value={"Back"} onClick={backButtonHandler}></Button>
        <Button value={"Continue"} onClick={continueButtonHandler}></Button>
      </div>
    </div>
  );
};

export default Description;
