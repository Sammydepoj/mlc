import React, { useState } from "react";
import styles from "./Listings.module.css";

import ListYourSpace from "./Components/ListYourSpace/ListYourSpace";
import Description from "./Components/Description/Description";
import Location from "./Components/Location/Location";
import Amenities from "./Components/Amenities/Amenities";

import Button from "./Components/Button/Button";
import Photos from "./Components/Photos/Photos";
import Pricing from "./Components/Pricing/Pricing";

const Listings = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    apartmentType: "",
    residentCount: "",
    location: "",
    state: "",
    address: "",
    listingName: "",
    summary: "",
    amenities: { couch: "", shower: "", ac: "" },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    currentStep === 4 ? console.log(formData) : "";
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className={styles.listings}>
      <div className={styles.listYourSpace}>
        <div>
          <h2>
            List Your <span>Space</span>
          </h2>
          <p>Be rest assured we help you make money renting out your space</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <ListYourSpace
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {currentStep === 2 && (
          <Description
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}
        {currentStep === 3 && (
          <Location
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}
        {currentStep == 4 && (
          <Amenities
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {currentStep == 5 && (
          <Photos
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {currentStep == 6 && (
          <Pricing
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        <div className={styles.btnsWrapper}>
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={previousStep}
              value={"Back"}
            ></Button>
          )}
          {currentStep < 6 ? (
            <Button
              type="button"
              onClick={nextStep}
              value={"Continue"}
            ></Button>
          ) : (
            <Button type={"submit"} value={"Submit"}></Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Listings;
