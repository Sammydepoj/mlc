import React, { useState, useEffect } from "react";
import styles from "./signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";

import useInput from "../../hooks/useInput";
import Success from "../Contact/components/Success/Success";
import Failure from "../Contact/components/Failure/Failure";
import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

import { Link } from "react-router-dom";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   auth,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
// } from "../../firebase/firebase";

const Signup = () => {
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

      setIsLoading(true);

      const saveUserData = await fetch(
        "https://minimumleavingcost-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify({
            userName: userNameInputValue,
            address: addressInputValue,
            password: passwordInputValue,
            email: emailInputvalue,
          }),
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

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  // const history = useNavigate();

  // const register = () => {
  //   if (!name) alert("Please enter name");
  //   registerWithEmailAndPassword(name, email, password);
  // };
  // useEffect(() => {
  //   if (loading) return;
  //   if (user) history.replace("/dashboard");
  // }, [user, loading]);

  return (
    <Background
      children={
        <>
          <NavLogo />
          <div className={styles.loginWrapper}>
            <form onSubmit={signUpSubmitHandler} className={styles.wrapper}>
              <h2>Register</h2>
              {/* <form className={styles.wrapper}> */}
              <Input
                aria-label={"username"}
                type={"text"}
                className={
                  userNameInputHasError ? styles.invalidInput : styles.input
                }
                placeholder={"Username"}
                value={userNameInputValue}
                onChange={userNameChangeHandler}
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                onBlur={userNameBlurHandler}
              ></Input>
              {userNameInputHasError && !formIsValid && (
                <p className={styles.errorText}>Username must not be empty!</p>
              )}
              <Input
                aria-label={"email for login"}
                type={"email"}
                className={
                  emailInputHasError ? styles.invalidInput : styles.input
                }
                placeholder={"Email"}
                value={emailInputvalue}
                onChange={emailChangeHandler}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onBlur={emailBlurHandler}
              ></Input>
              {emailInputHasError && !formIsValid && (
                <p className={styles.errorText}>Please enter a valid email !</p>
              )}
              <Input
                aria-label={"password for login"}
                type={"password"}
                className={
                  passwordInputHasError ? styles.invalidInput : styles.input
                }
                placeholder={"Password"}
                value={passwordInputValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              ></Input>
              {passwordInputHasError && !formIsValid && (
                <p className={styles.errorText}>
                  Password must be greater than 6 characters
                </p>
              )}
              <Input
                aria-label={"user address"}
                type={"text"}
                className={
                  addressInputHasError ? styles.invalidInput : styles.input
                }
                value={addressInputValue}
                placeholder={"Address"}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
              ></Input>
              {addressInputHasError && !formIsValid && (
                <p className={styles.errorText}>Address must not be empty !</p>
              )}
                <Button
                  type={"submit"}
                  disabled={!formIsValid}
                  value={
                    isLoading ? "Loading..." : `Create Account${httpError}`
                  }
                  className={styles.createAccount}
                  // value={"Sign Up"}
                  // onClick={register}
                ></Button>
                <Button
                  type={"submit"}
                  value={"Sign in with Google"}
                  // onClick={signInWithGoogle}
                ></Button>
              <p className={styles.already}>
                Already have an account ? <Link to="/login">Login</Link>
              </p>
              {isDataSent(dataSentConfirmation)}
            </form>
          </div>
        </>
      }
    ></Background>
  );
};

export default Signup;
