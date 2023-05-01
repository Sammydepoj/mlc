export const validateForm = (currentStep, formData, setErrors) => {
  let isValid = true;

  const newErrors = {};
  switch (currentStep) {
    case 1:
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
      break;
    case 2:
      if (formData.listingName.trim() === "") {
        newErrors.listingName = "Please enter a listing name";
        isValid = false;
      }
      if (formData.summary.trim() === "") {
        newErrors.summary = "Please enter a summary";
        isValid = false;
      }
      break;
    case 3:
      if (formData.state.trim() === "") {
        newErrors.state = "Please select a state";
        isValid = false;
      }
      if (formData.address.trim() === "") {
        newErrors.address = "Please enter an address";
        isValid = false;
      }
      break;
    case 4:
      if (
        formData.ac === false &&
        formData.couch === false &&
        formData.shower === false &&
        formData.heater === false &&
        formData.bathTub === false &&
        formData.washingMachine === false &&
        formData.tv === false &&
        formData.wardrobe === false &&
        formData.cleaner === false &&
        formData.gym === false &&
        formData.smokeDetector === false &&
        formData.fireExtinguisher === false &&
        formData.readingRoom === false &&
        formData.kitchen === false
      ) {
        newErrors.amenities = "Please select at least one amenity";
        isValid = false;
      }
      break;
    // case 5:
    //   if (!formData.video) {
    //     newErrors.video = "Please select a video";
    //     isValid = false;
    //   }
    //   if (!formData.photo) {
    //     newErrors.photo = "Please select a photo";
    //     isValid = false;
    //   }
    //   break;
    case 6:
      if (formData.cleaningPrice.trim() === "") {
        newErrors.cleaningPrice = "Please enter a cleaning Price";
        isValid = false;
      }
      if (formData.homePrice.trim() === "") {
        newErrors.homePrice = "Please enter a home price";
        isValid = false;
      }
      break;
    case 7:
      if (formData.agreeTermsAndCondition === false) {
        newErrors.agreeTermsAndCondition =
          "Please agree to the terms and conditions";
        isValid = false;
      }
      break;
    default:
      break;
  }
  setErrors(newErrors);
  return isValid;
};
