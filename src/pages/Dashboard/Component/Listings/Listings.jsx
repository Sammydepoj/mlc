import React, { useState } from "react";
import styles from "./Listings.module.css";

import ListYourSpace from "./Components/ListYourSpace/ListYourSpace";
import Description from "./Components/Description/Description";
import Location from "./Components/Location/Location";
import Amenities from "./Components/Amenities/Amenities";
import Photos from "./Components/Photos/Photos";
import Pricing from "./Components/Pricing/Pricing";
import TermsAndCondition from "./Components/TermsAndCondition/TermsAndCondition";

import Button from "./Components/Button/Button";

const Listings = () => {
  const [formData, setFormData] = useState({
    apartmentType: "",
    residentCount: "",
    location: "",
    state: "",
    address: "",
    listingName: "",
    summary: "",
    amenities: {
      ac: "",
      couch: "",
      shower: "",
      heater: "",
      bathTub: "",
      washingMachine: "",
      tv: "",
      wardrobe: "",
      cleaner: "",
      gym: "",
      smokeDetector: "",
      fireExtinguisher: "",
      readingRoom: "",
      kitchen: "",
    },
    photo: "",
    video: "",
    homePrice: "",
    cleaningPrice: "",
    agree: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;

    const newErrors = {};
    if (currentStep === 1) {
      if (formData.apartmentType.trim() === "") {
        newErrors.apartmentType = "Please select an apartment type";
        isValid = false;
      }

      if (formData.residentCount.trim() === "") {
        newErrors.residentCount = "Please select a resident count";
        isValid = false;
      }

      if (formData.location.trim() === "") {
        newErrors.location = "Please enter a location";
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (formData.listingName.trim() === "") {
        newErrors.listingName = "Please enter a listing name";
        isValid = false;
      }

      if (formData.summary.trim() === "") {
        newErrors.summary = "Please enter a summary";
        isValid = false;
      }
    } else if (currentStep === 3) {
      if (formData.state.trim() === "") {
        newErrors.state = "Please select a state";
        isValid = false;
      }

      if (formData.address.trim() === "") {
        newErrors.address = "Please enter an address";
        isValid = false;
      }
    } else if (currentStep === 6) {
      if (formData.cleaningPrice.trim() === "") {
        newErrors.cleaningPrice = "Please enter a cleaning Price";
        isValid = false;
      }

      if (formData.homePrice.trim() === "") {
        newErrors.homePrice = "Please enter a home price";
        isValid = false;
      }
    } else if (currentStep === 7) {
      if (!formData.agree) {
        newErrors.agree = "Please agree to the terms and conditions";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    const isValid = validateForm();
    if (isValid) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
    }
  };

  const previousStep = () => {
    const newStep = currentStep - 1;
    setCurrentStep(newStep);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const progress = (currentStep / 7) * 100;

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
        <div style={{ width: "100%", border: "1px solid black" }}>
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "#8b5f52",
              height: "10px",
            }}
          ></div>
        </div>

        {currentStep === 1 && (
          <ListYourSpace
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
          />
        )}
        {currentStep === 2 && (
          <Description
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            previousStep={previousStep}
            errors={errors}
          />
        )}
        {currentStep === 3 && (
          <Location
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            previousStep={previousStep}
            errors={errors}
          />
        )}
        {currentStep == 4 && (
          <Amenities
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
          />
        )}
        {currentStep == 5 && (
          <Photos
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
          />
        )}
        {currentStep == 6 && (
          <Pricing
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
          />
        )}
        {currentStep == 7 && (
          <TermsAndCondition
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
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
          {currentStep < 7 ? (
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

// else if(currentStep ===4){

// }

// if (!formData.photo) {
//   newErrors.photo = "Please enter a photo";
// }

// if (!formData.homePrice) {
//   newErrors.homePrice = "Please enter a price";
// }
// if (!formData.video) {
//   newErrors.video = "Please enter a video";
// }
// if (!formData.cleaningPrice) {
//   newErrors.cleaningPrice = "Please enter a cleaning price";
// }

// if (!formData.agree) {
//   newErrors.agree = "Please agree to the terms and condition";
// }
