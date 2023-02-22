import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "./components/Input/Input";
import Label from "./components/Label/Label";
import Select from "./components/Select/Select";
import Drag from "./components/Upload Photo/Drag";
import styles from "./contact.module.css";

import useInput from "../../hooks/useInput";

const Contact = () => {
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
  } = useInput(
    (value) => value.trim() !== "" && value.trim() >= 1 && value.trim() <= 100
  );

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
      const saveData = await fetch(
        "https://react-http-dff7f-default-rtdb.firebaseio.com/homes.json",
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
        }
      );
      console.log(saveData);
      if (!saveData) {
        throw new Error("Something went wrong !");
      }
      if (!saveData.ok) {
        throw new Error("Failed to Save !");
      }
      // console.log(
      //   nameInputValue,
      //   addressInputValue,
      //   unitNumberInputValue,
      //   cityInputValue,
      //   stateInputValue,
      //   roomTypeInputValue,
      //   priceInputValue,
      //   descriptionInputValue
      // );
      resetNameInput();
      resetAddressInput();
      resetUnitNumberInput();
      resetCityInput();
      resetStateInput();
      resetRoomTypeInput();
      resetPriceInput();
      resetDescriptionInput();
    } catch (error) {
      console.log(error);
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
              max={10}
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
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
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
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
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
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
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
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
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
            value={"Add New Property"}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
