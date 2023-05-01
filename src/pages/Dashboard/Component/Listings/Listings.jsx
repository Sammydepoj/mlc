import React, { useState, useEffect } from "react";
import styles from "./Listings.module.css";

import ListYourSpace from "./Components/ListYourSpace/ListYourSpace";
import Description from "./Components/Description/Description";
import Location from "./Components/Location/Location";
import Amenities from "./Components/Amenities/Amenities";
import Photos from "./Components/Photos/Photos";
import Pricing from "./Components/Pricing/Pricing";
import TermsAndCondition from "./Components/TermsAndCondition/TermsAndCondition";

import Button from "./Components/Button/Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { validateForm } from "./validateForm";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Listings = () => {
  const [formData, setFormData] = useState({
    apartmentType: "",
    residentCount: "",
    location: "",
    state: "",
    address: "",
    listingName: "",
    summary: "",
    ac: false,
    couch: false,
    shower: false,
    heater: false,
    bathTub: false,
    washingMachine: false,
    tv: false,
    wardrobe: false,
    cleaner: false,
    gym: false,
    smokeDetector: false,
    fireExtinguisher: false,
    readingRoom: false,
    kitchen: false,
    // amenities: {},
    photo: "",
    video: "",
    homePrice: "",
    cleaningPrice: "",
    agreeTermsAndCondition: false,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const [errors, setErrors] = useState({});

  const nextStep = () => {
    const isValid = validateForm(currentStep, formData, setErrors);
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
    const isValid = validateForm(currentStep, formData, setErrors);
    isValid && console.log(formData);
  };

  const progress = (currentStep / 7) * 100;

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
    <div className={styles.listings}>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="visible"
        animate={control}
        className={styles.listYourSpace}
      >
        <div>
          <h2>
            List Your <span>Space</span>
          </h2>
          <p>Be rest assured we help you make money renting out your space</p>
        </div>
      </motion.div>

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
        {currentStep === 4 && (
          <Amenities
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
          />
        )}
        {currentStep === 5 && (
          <Photos
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
          />
        )}
        {currentStep === 6 && (
          <Pricing
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
          />
        )}
        {currentStep === 7 && (
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
