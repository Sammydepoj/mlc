import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "./components/Input/Input";
import Label from "./components/Label/Label";
import Select from "./components/Select/Select";
import Drag from "./components/Upload Photo/Drag";
import Failure from "./components/Failure/Failure";
import Success from "./components/Success/Success";

import styles from "./contact.module.css";

import useInput from "../../hooks/useInput";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, sethttpError] = useState("");
  const [dataSentConfirmation, setDataSetConfirmation] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DROP_DEPTH":
        return { ...state, dropDepth: action.dropDepth };
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [data, dispatch] = React.useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });

  const {
    value: nameInputValue,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: addressInputValue,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: unitNumberInputValue,
    isValid: enteredUnitNumberIsValid,
    hasError: unitNumberInputHasError,
    valueChangeHandler: unitNumberChangeHandler,
    inputBlurHandler: unitNumberBlurHandler,
    reset: resetUnitNumberInput,
  } = useInput(
    (value) => value.trim() !== "" && value.trim() >= 1 && value.trim() <= 10
  );
  const {
    value: cityInputValue,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: stateInputValue,
    isValid: enteredStateIsValid,
    hasError: stateInputHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetStateInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: roomTypeInputValue,
    isValid: enteredRoomTypeIsValid,
    hasError: roomTypeInputHasError,
    valueChangeHandler: roomTypeChangeHandler,
    inputBlurHandler: roomTypeBlurHandler,
    reset: resetRoomTypeInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: priceInputValue,
    isValid: enteredPriceIsValid,
    hasError: priceInputHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPriceInput,
  } = useInput((value) => value.trim() !== "" && value.trim() >= 1);

  const {
    value: descriptionInputValue,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    nameInputValue &&
    addressInputValue &&
    unitNumberInputValue &&
    cityInputValue &&
    stateInputValue &&
    roomTypeInputValue &&
    priceInputValue &&
    descriptionInputValue
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event) => {
    try {
      event.preventDefault();

      if (!formIsValid) {
        return;
      }
      if (
        !nameInputValue &&
        !addressInputValue &&
        !unitNumberInputValue &&
        !cityInputValue &&
        !stateInputValue &&
        !roomTypeInputValue &&
        !priceInputValue &&
        !descriptionInputValue
      ) {
        return;
      }

      setIsLoading(true);

      const saveData = await fetch(
        "https://minimumleavingcost-default-rtdb.firebaseio.com/homesold.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: nameInputValue,
            address: addressInputValue,
            unit_number: unitNumberInputValue,
            city: cityInputValue,
            state: stateInputValue,
            room_type: roomTypeInputValue,
            price: priceInputValue,
            description: descriptionInputValue,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
      console.log(saveData);

      const data = await saveData.json();
      console.log(data);

      if (!saveData) {
        setIsLoading(false);
        setDataSetConfirmation(false);

        throw new Error();
      }

      if (!saveData.ok) {
        setIsLoading(false);
        setDataSetConfirmation(false);

        throw new Error();
      }

      if (saveData.ok) {
        setDataSetConfirmation(true);
        setIsLoading(false);
        sethttpError("Data Successfully Saved !");
        setTimeout(() => {
          sethttpError("");
          setDataSetConfirmation(null);
        }, 5000);
      }
      resetNameInput();
      resetAddressInput();
      resetUnitNumberInput();
      resetCityInput();
      resetStateInput();
      resetRoomTypeInput();
      resetPriceInput();
      resetDescriptionInput();
    } catch (error) {
      sethttpError("Something went wrong!");
      setDataSetConfirmation(false);
      setIsLoading(false);

      setTimeout(() => {
        sethttpError("");
        setDataSetConfirmation(null);
      }, 5000);
    }
  };
  const isDataSent = (confirmedData) => {
    if (confirmedData === null) {
      return;
    }
    if (confirmedData === false) {
      return <Failure children={httpError} />;
    }
    if (confirmedData === true) {
      return <Success children={httpError} />;
    }
  };
  return (
    <div className={styles.contact}>
      <h3 className={styles.contactHeader}>
        Your property with us and be Confident that Your Room will be Filled Out
        !
      </h3>
      <form className={styles.contactForm} onSubmit={formSubmitHandler}>
        <h2 className={styles.formHeading}>Add A New Property</h2>
        <div className={styles.inputsAndLabel}>
          <div className={styles.name}>
            <Label htmlFor={"fullname"} className={styles.label}>
              Name <span>*</span>
            </Label>
            <br />
            <Input
              type={"text"}
              className={nameInputHasError ? styles.invalidInput : styles.input}
              placeholder={"Enter Name"}
              id={"fullname"}
              value={nameInputValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && !formIsValid && (
              <p className={styles.errorText}>Name must not be empty!</p>
            )}
          </div>
          <div className={styles.address}>
            <Label htmlFor={"address"} className={styles.label}>
              Address <span>*</span>
            </Label>
            <br />
            <Input
              type={"text"}
              className={
                addressInputHasError ? styles.invalidInput : styles.input
              }
              placeholder={"Enter Address"}
              id={"Address"}
              value={addressInputValue}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            />
            {addressInputHasError && !formIsValid && (
              <p className={styles.errorText}>Address must not be empty!</p>
            )}
          </div>
          <div className={styles.unitNumber}>
            <Label htmlFor={"unitNumber"} className={styles.label}>
              Unit Number <span>*</span>
            </Label>
            <br />
            <Input
              step={1}
              min={1}
              max={50}
              type={"number"}
              className={
                unitNumberInputHasError ? styles.invalidInput : styles.input
              }
              placeholder={"Enter Unit"}
              id={"unitNumber"}
              value={unitNumberInputValue}
              onChange={unitNumberChangeHandler}
              onBlur={unitNumberBlurHandler}
            />
            {unitNumberInputHasError && !formIsValid && (
              <p className={styles.errorText}>
                Please input a unit (Numbers between 1 - 10 only)!
              </p>
            )}
          </div>
          <div className={styles.unitNumber}>
            <Label htmlFor={"unitNumber"} className={styles.label}>
              City <span>*</span>
            </Label>
            <br />
            <Select
              name={"city"}
              id={"city"}
              className={
                cityInputHasError ? styles.invalidInput : styles.select
              }
              value={cityInputValue}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
            >
              <option value="">Select City </option>
              <option value="ikeja">Ikeja</option>
              <option value="somolu">Somolu</option>
              <option value="ikorodu">Ikorodu</option>
              <option value="lekki">Lekki</option>
              <option value="epe">Epe</option>
            </Select>
            {cityInputHasError && !formIsValid && (
              <p className={styles.errorText}>Please select a city!</p>
            )}
          </div>
          <div className={styles.state}>
            <Label htmlFor={"state"} className={styles.label}>
              State <span>*</span>
            </Label>
            <br />
            <Select
              name={"state"}
              id={"state"}
              className={
                stateInputHasError ? styles.invalidInput : styles.select
              }
              value={stateInputValue}
              onChange={stateChangeHandler}
              onBlur={stateBlurHandler}
            >
              <option value="">Select State</option>
              <option value="lagos">Lagos</option>
              <option value="oyo">Oyo</option>
              <option value="osun">Osun</option>
              <option value="ogun">Ogun</option>
              <option value="ekiti">Ekiti</option>
            </Select>
            {stateInputHasError && !formIsValid && (
              <p className={styles.errorText}>Please select a state!</p>
            )}
          </div>
          <div className={styles.roomType}>
            <Label htmlFor={"roomType"} className={styles.label}>
              Room Type <span>*</span>
            </Label>
            <br />
            <Select
              key={"room-type-1"}
              name={"roomType"}
              id={"roomType1"}
              className={
                roomTypeInputHasError ? styles.invalidInput : styles.select
              }
              value={roomTypeInputValue}
              onChange={roomTypeChangeHandler}
              onBlur={roomTypeBlurHandler}
            >
              <option value="">Select Room Type</option>
              <option value="1_bedrooms">1 bedroom</option>
              <option value="2_bedrooms">2 bedrooms</option>
              <option value="3_bedrooms">3 bedrooms</option>
              <option value="4_bedrooms">4 bedrooms</option>
              <option value="5_bedrooms">5 bedrooms</option>
            </Select>
            {roomTypeInputHasError && !formIsValid && (
              <p className={styles.errorText}>Please select a room type!</p>
            )}
          </div>
          <div className={styles.price}>
            <Label htmlFor={"price"} className={styles.label}>
              Price <span>*</span>
            </Label>
            <br />
            <Input
              type={"number"}
              min={1}
              className={
                priceInputHasError ? styles.invalidInput : styles.input
              }
              placeholder={"Enter Price"}
              id={"price"}
              value={priceInputValue}
              onChange={priceChangeHandler}
              onBlur={priceBlurHandler}
            />
            {priceInputHasError && !formIsValid && (
              <p className={styles.errorText}>Please input a valid price!</p>
            )}
          </div>
          <div className={styles.roomType}>
            <Label htmlFor={"roomType"} className={styles.label}>
              Room Type <span>*</span>
            </Label>
            <br />
            <Select
              name={"roomType"}
              id={"roomType"}
              className={
                roomTypeInputHasError ? styles.invalidInput : styles.select
              }
              value={roomTypeInputValue}
              onChange={roomTypeChangeHandler}
              onBlur={roomTypeBlurHandler}
            >
              <option value="">Select Room Type</option>
              <option value="1_bedrooms">1 bedroom</option>
              <option value="2_bedrooms">2 bedrooms</option>
              <option value="3_bedrooms">3 bedrooms</option>
              <option value="4_bedrooms">4 bedrooms</option>
              <option value="5_bedrooms">5 bedrooms</option>
            </Select>
            {roomTypeInputHasError && !formIsValid && (
              <p className={styles.errorText}>Please select a room type!</p>
            )}
          </div>
        </div>
        <br />
        <div className={styles.description}>
          <Label htmlFor={"description"} className={styles.label}>
            Description <span>*</span>
          </Label>
          <br />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Enter Description"
            className={
              descriptionInputHasError
                ? styles.invalidTextArea
                : styles.textarea
            }
            value={descriptionInputValue}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
          ></textarea>
          {descriptionInputHasError && !formIsValid && (
            <p className={styles.errorText}>Please input a description !</p>
          )}
        </div>
        <Drag data={data} dispatch={dispatch} />
        <ol className="dropped-files">
          {data.fileList.map((f) => {
            return <li key={f.name}>{f.name}</li>;
          })}
        </ol>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            disabled={!formIsValid}
            type={"submit"}
            value={isLoading ? "Loading..." : `Add New Property${httpError}`}
          ></Button>
        </div>
        {isDataSent(dataSentConfirmation)}
      </form>
    </div>
  );
};
export default Contact;
