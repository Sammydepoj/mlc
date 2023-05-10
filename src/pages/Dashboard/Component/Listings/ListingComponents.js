import ListYourSpace from "./Components/ListYourSpace/ListYourSpace";
import Description from "./Components/Description/Description";
import Location from "./Components/Location/Location";
import Amenities from "./Components/Amenities/Amenities";
import Photos from "./Components/Photos/Photos";
import Pricing from "./Components/Pricing/Pricing";
import TermsAndCondition from "./Components/TermsAndCondition/TermsAndCondition";

export const components = [
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
