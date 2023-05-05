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

import { bannerVariant } from "./Animation/Animate";

import { validateForm } from "./validateForm";
// import { components } from "./ListingComponents";

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
    window.scrollTo(0, 0);
  };

  const previousStep = () => {
    const newStep = currentStep - 1;
    setCurrentStep(newStep);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const isValid = validateForm(currentStep, formData, setErrors);
      if (!isValid) return;
      if (isValid) {
        const saveHomeData = await fetch(
          "https://minimumleavingcost-default-rtdb.firebaseio.com/homes.json",
          {
            method: "POST",
            body: JSON.stringify({
              apartmentType: formData.apartmentType,
              residentCount: formData.residentCount,
              location: formData.location,
              state: formData.state,
              address: formData.address,
              listingName: formData.listingName,
              summary: formData.summary,
              amenities: {
                ac: formData.ac,
                couch: formData.couch,
                shower: formData.shower,
                heater: formData.heater,
                bathTub: formData.bathTub,
                washingMachine: formData.washingMachine,
                tv: formData.tv,
                wardrobe: formData.wardrobe,
                cleaner: formData.cleaner,
                gym: formData.gym,
                smokeDetector: formData.smokeDetector,
                fireExtinguisher: formData.fireExtinguisher,
                readingRoom: formData.readingRoom,
                kitchen: formData.kitchen,
              },
              photo: formData.photo,
              video: formData.video,
              homePrice: formData.homePrice,
              cleaningPrice: formData.cleaningPrice,
              agreeTermsAndCondition: formData.agreeTermsAndCondition,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(saveHomeData);
        const data = await saveHomeData.json();
        if (!saveHomeData) {
          throw new Error();
        }

        if (saveHomeData.ok) {
          alert(
            `Your Property ${formData.listingName} located at ${formData.location} with the price ${formData.homePrice} has been uploaded succesfully! `
          );
          setFormData({
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
            photo: "",
            video: "",
            homePrice: "",
            cleaningPrice: "",
            agreeTermsAndCondition: false,
          });
          setCurrentStep(1);
        }

        if (!saveHomeData.ok) {
          throw new Error();
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const components = [
    {
      name: (
        <ListYourSpace
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          errors={errors}
        />
      ),
      id: "comp1",
    },
    {
      name: (
        <Description
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          previousStep={previousStep}
          errors={errors}
        />
      ),
      id: "comp2",
    },
    {
      name: (
        <Location
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          previousStep={previousStep}
          errors={errors}
        />
      ),
      id: "comp3",
    },
    {
      name: (
        <Amenities
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          previousStep={previousStep}
          errors={errors}
        />
      ),
      id: "comp4",
    },
    {
      name: (
        <Photos
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          previousStep={previousStep}
          errors={errors}
        />
      ),
      id: "comp5",
    },
    {
      name: (
        <Pricing
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          previousStep={previousStep}
          errors={errors}
        />
      ),
      id: "comp6",
    },
    {
      name: (
        <TermsAndCondition
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          errors={errors}
        />
      ),
      id: "comp7",
    },
  ];

  const progress = (currentStep / components.length) * 100;

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
        variants={bannerVariant}
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
        <div className={styles.progressContainer}>
          <div style={{ width: `${progress}%` }} className={styles.progress}>
            <div
              style={{ left: `calc(${progress}% - 30px)` }}
              className={styles.currentStepProgress}
            >
              {`Step ${currentStep}`}
            </div>
          </div>
        </div>

        {currentStep === 1 && components[0].name}
        {currentStep === 2 && components[1].name}
        {currentStep === 3 && components[2].name}
        {currentStep === 4 && components[3].name}
        {currentStep === 5 && components[4].name}
        {currentStep === 6 && components[5].name}
        {currentStep === 7 && components[6].name}

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