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
  // const {
  //   value: nameInputValue,
  //   isValid: enteredNameIsValid,
  //   hasError: nameInputHasError,
  //   inputValueChangeHandler: nameChangeHandler,
  //   inputBlurHandler: nameBlurHandler,
  //   reset: resetNameInput,
  // } = useInput((value) => value.trim() !== "");

  const [nameInputValue, setNameInputValue] = useState("");
  const [nameValueTouched, setNameValueTouched] = useState(false);

  const enteredNameIsValid = nameInputValue.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && nameValueTouched;

  let formIsValid = false;

  if (nameInputValue) {
    formIsValid = true;
  }
  const nameChangeHandler = (event) => {
    setNameInputValue(event.target.value);
  };
  const nameBlurHandler = () => {
    setNameValueTouched(true);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameValueTouched(true);
    if (!nameInputValue) {
      return;
    }
    console.log(nameInputValue);
    if (!formIsValid) {
      return;
    }
    setNameInputValue("");
    setNameValueTouched(false);

    resetNameInput();
    console.log("submitted");
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
              className={nameInputIsValid ? styles.invalidInput : styles.input}
              // className={nameInputHasError ? styles.invalidInput : styles.input}
              placeholder={"Enter Name"}
              id={"fullname"}
              value={nameInputValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputIsValid && (
              <p className={styles.errorText}>Name must not be empty!</p>
            )}
            {/* {enteredNameIsValid && (
              <p className={styles.errorText}>Name must not be empty!</p>
            )} */}
          </div>
          <div className={styles.address}>
            <Label htmlFor={"address"} className={styles.label}>
              Address <span>*</span>
            </Label>
            <br />
            <Input
              type={"text"}
              className={styles.input}
              placeholder={"Enter Address"}
              id={"Address"}
            />
          </div>
          <div className={styles.unitNumber}>
            <Label htmlFor={"unitNumber"} className={styles.label}>
              Unit Number <span>*</span>
            </Label>
            <br />
            <Input
              type={"text"}
              className={styles.input}
              placeholder={"Enter Unit"}
              id={"unitNumber"}
            />
          </div>
          <div className={styles.unitNumber}>
            <Label htmlFor={"unitNumber"} className={styles.label}>
              City <span>*</span>
            </Label>
            <br />
            <Select name={"city"} id={"city"} className={styles.select}>
              <option value="select">Select City </option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
            </Select>
          </div>
          <div className={styles.state}>
            <Label htmlFor={"state"} className={styles.label}>
              State <span>*</span>
            </Label>
            <br />
            <Select name={"state"} id={"state"} className={styles.select}>
              <option value="select">Select State</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
            </Select>
          </div>
          <div className={styles.roomType}>
            <Label htmlFor={"roomType"} className={styles.label}>
              Room Type <span>*</span>
            </Label>
            <br />
            <Select name={"roomType"} id={"roomType"} className={styles.select}>
              <option value="select">Select Room Type</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
            </Select>
          </div>
          <div className={styles.price}>
            <Label htmlFor={"price"} className={styles.label}>
              Price <span>*</span>
            </Label>
            <br />
            <Input
              type={"text"}
              className={styles.input}
              placeholder={"Enter Price"}
              id={"price"}
            />
          </div>
          <div className={styles.roomType}>
            <Label htmlFor={"roomType"} className={styles.label}>
              Room Type <span>*</span>
            </Label>
            <br />
            <Select name={"roomType"} id={"roomType"} className={styles.select}>
              <option value="select">Select Room Type</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
              <option value="lagos">lagos</option>
            </Select>
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
            className={styles.textarea}
          ></textarea>
        </div>
        <Drag data={data} dispatch={dispatch} />
        <ol className="dropped-files">
          {data.fileList.map((f) => {
            return <li key={f.name}>{f.name}</li>;
          })}
        </ol>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type={"submit"} value={"Add New Property"} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
