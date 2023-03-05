import React, { useState } from "react";
import styles from "./signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";

import useInput from "../../hooks/useInput";
import Success from "../Contact/components/Success/Success";
import Failure from "../Contact/components/Failure/Failure";
import NavLogo from "../NavbarAndLogo/NavLogo";

const Signup = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, sethttpError] = useState("");
  const [dataSentConfirmation, setDataSetConfirmation] = useState("");

  const {
    value: userNameInputValue,
    isValid: enteredUserNameIsValid,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInputvalue,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: addressInputValue,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: passwordInputValue,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length >= 6 && value.trim() !== "");

  let formIsValid = false;

  if (
    userNameInputValue &&
    emailInputvalue &&
    addressInputValue &&
    passwordInputValue
  ) {
    formIsValid = true;
  }

  const signUpSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      if (!formIsValid) {
        return;
      }

      if (
        !userNameInputValue &&
        !emailInputvalue &&
        !addressInputValue &&
        !passwordInputValue
      ) {
        return;
      }

      setUserData({
        userName: userNameInputValue,
        address: addressInputValue,
        password: passwordInputValue,
        email: emailInputvalue,
      });
      setIsLoading(true);

      const saveUserData = await fetch(
        "https://minimumleavingcost-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );

      setIsLoading(false);
      console.log(saveUserData);

      const data = await saveUserData.json();
      console.log(data);

      if (!saveUserData) {
        setIsLoading(false);
        setDataSetConfirmation(false);

        throw new Error();
      }

      if (saveUserData.ok) {
        setDataSetConfirmation(true);
        setIsLoading(false);
        sethttpError("Data Successfully Saved !");
        setTimeout(() => {
          sethttpError("");
          setDataSetConfirmation(null);
        }, 5000);
      }

      if (!saveUserData.ok) {
        setIsLoading(false);
        setDataSetConfirmation(false);

        throw new Error();
      }

      resetUserNameInput();
      resetEmailInput();
      resetAddressInput();
      resetPasswordInput();
    } catch (error) {
      console.log(error);
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
    <>
      <NavLogo />
      <div className={styles.loginWrapper}>
        <form onSubmit={signUpSubmitHandler} className={styles.wrapper}>
          <div className={styles.username}>
            <Label htmlFor={"username"} className={styles.label}>
              Username:
            </Label>
            <Input
              aria-label={"username"}
              type={"text"}
              className={
                userNameInputHasError ? styles.invalidInput : styles.input
              }
              value={userNameInputValue}
              onChange={userNameChangeHandler}
              onBlur={userNameBlurHandler}
            ></Input>
            {userNameInputHasError && !formIsValid && (
              <p className={styles.errorText}>Username must not be empty!</p>
            )}
          </div>
          <div className={styles.email}>
            <Label htmlFor={"email"} className={styles.label}>
              Email:
            </Label>
            <Input
              aria-label={"email for login"}
              type={"email"}
              className={
                emailInputHasError ? styles.invalidInput : styles.input
              }
              value={emailInputvalue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            ></Input>
            {emailInputHasError && !formIsValid && (
              <p className={styles.errorText}>Please enter a valid email !</p>
            )}
          </div>
          <div className={styles.password}>
            <Label htmlFor={"password"} className={styles.label}>
              Password:
            </Label>
            <Input
              aria-label={"password for login"}
              type={"password"}
              className={
                passwordInputHasError ? styles.invalidInput : styles.input
              }
              value={passwordInputValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            ></Input>
            {passwordInputHasError && !formIsValid && (
              <p className={styles.errorText}>
                Password must be greater than 6 characters
              </p>
            )}
          </div>
          <div className={styles.address}>
            <Label htmlFor={"address"} className={styles.label}>
              Address:
            </Label>
            <Input
              aria-label={"user address"}
              type={"text"}
              className={
                addressInputHasError ? styles.invalidInput : styles.input
              }
              value={addressInputValue}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            ></Input>
            {addressInputHasError && !formIsValid && (
              <p className={styles.errorText}>Address must not be empty !</p>
            )}
          </div>
          <div className={styles.loginBtns}>
            <Button
              type={"submit"}
              disabled={!formIsValid}
              value={isLoading ? "Loading..." : `Sign Up${httpError}`}
            ></Button>
            <p>or</p>
            <Button type={"submit"} value={"Sign in with Google"}></Button>

          </div>
          {isDataSent(dataSentConfirmation)}
        </form>
      </div>
    </>
  );
};

export default Signup;
