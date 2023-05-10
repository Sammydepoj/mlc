import React, { useState, useEffect } from "react";
import styles from "./signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";

import useInput from "../../hooks/useInput";
import Success from "../Contact/components/Success/Success";
import Failure from "../Contact/components/Failure/Failure";
import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { BsApple } from "react-icons/bs";

import {
  signInWithGoogle,
  registerWithEmailAndPassword,
  auth,
} from "../../firebase/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, sethttpError] = useState("");
  const [dataSentConfirmation, setDataSetConfirmation] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    value: firstNameInputValue,
    isValid: enteredfirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetfirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameInputValue,
    isValid: enteredlastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastNameInput,
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
    value: roleInputvalue,
    isValid: enteredRoleIsValid,
    hasError: roleInputHasError,
    valueChangeHandler: roleChangeHandler,
    inputBlurHandler: roleBlurHandler,
    reset: resetRoleInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: passwordInputValue,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length >= 6 && value.trim() !== "");

  const {
    value: confirmPasswordInputValue,
    isValid: enteredconfirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPasswordInput,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      value.length >= 6 &&
      value.trim().match(passwordInputValue)
  );

  let formIsValid = false;

  if (
    firstNameInputValue &&
    !firstNameInputHasError &&
    lastNameInputValue &&
    !lastNameInputHasError &&
    emailInputvalue &&
    !emailInputHasError &&
    confirmPasswordInputValue &&
    !confirmPasswordInputHasError &&
    passwordInputValue &&
    !passwordInputHasError &&
    roleInputvalue &&
    !roleInputHasError
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
        !firstNameInputValue &&
        !lastNameInputValue &&
        !emailInputvalue &&
        !confirmPasswordInputValue &&
        !passwordInputValue &&
        !roleInputvalue
      ) {
        return;
      }
      const userNameInputValue = firstNameInputValue + " " + lastNameInputValue;

      registerWithEmailAndPassword(
        userNameInputValue,
        emailInputvalue,
        passwordInputValue,
        roleInputvalue
      );

      setIsLoading(true);

      const saveUserData = await fetch(
        "https://minimumleavingcost-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify({
            userName: userNameInputValue,
            email: emailInputvalue,
            password: passwordInputValue,
            role: roleInputvalue,
          }),
          headers: {
            "Content-Type": "application/json",
          },
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

      resetfirstNameInput();
      resetlastNameInput();
      resetEmailInput();
      resetConfirmPasswordInput();
      resetPasswordInput();
      resetRoleInput();
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

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

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
    <Background
      children={
        <>
          <NavLogo />
          <div className={styles.loginWrapper}>
            <form onSubmit={signUpSubmitHandler} className={styles.wrapper}>
              <h2>Register Now</h2>
              <p className={styles.ctaDetails}>
                Create an account to have complete access and start leasing out
                your place at ease with no hassles.
              </p>
              <div className={styles.ctaHeading}>
                <hr />
                <div>
                  <p className={styles.ctaDetails}>Sign up with</p>
                </div>
              </div>
              <div className={styles.socialLogins}>
                <div className={styles.appleSignup}>
                  <BsApple className={styles.icons} />
                </div>
                <div className={styles.googleSignup} onClick={signInWithGoogle}>
                  <FcGoogle className={styles.icons} />
                </div>
                <div className={styles.facebookSignup}>
                  <GrFacebookOption className={styles.icons} />
                </div>
              </div>
              <p className={styles.ctaDetails}>Or</p>
              <div className={styles.inputsWrapper}>
                <Input
                  aria-label={"first name"}
                  type={"text"}
                  className={
                    firstNameInputHasError ? styles.invalidInput : styles.input
                  }
                  placeholder={"First Name"}
                  value={firstNameInputValue}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                ></Input>
                {firstNameInputHasError &&
                  !formIsValid &&
                  !enteredfirstNameIsValid && (
                    <p className={styles.errorText}>
                      Firstname must not be empty!
                    </p>
                  )}
                <Input
                  aria-label={"last name"}
                  type={"text"}
                  className={
                    lastNameInputHasError ? styles.invalidInput : styles.input
                  }
                  placeholder={"Last Name"}
                  value={lastNameInputValue}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                ></Input>
                {lastNameInputHasError &&
                  !formIsValid &&
                  !enteredlastNameIsValid && (
                    <p className={styles.errorText}>
                      Last name must not be empty!
                    </p>
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
                  onBlur={emailBlurHandler}
                ></Input>
                {emailInputHasError && !formIsValid && !enteredEmailIsValid && (
                  <p className={styles.errorText}>
                    Please enter a valid email !
                  </p>
                )}
                <select
                  name="role"
                  id="role"
                  className={
                    roleInputHasError ? styles.invalidInput : styles.input
                  }
                  onChange={roleChangeHandler}
                  onBlur={roleBlurHandler}
                >
                  <option value="">Sign up as</option>
                  <option value="tenant">Tenant</option>
                  <option value="landlord">Landlord</option>
                </select>
                {roleInputHasError && !formIsValid && !enteredRoleIsValid && (
                  <p className={styles.errorText}>Please select a role!</p>
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
                {passwordInputHasError &&
                  !formIsValid &&
                  !enteredPasswordIsValid && (
                    <p className={styles.errorText}>
                      Password must be greater than 6 characters
                    </p>
                  )}
                <Input
                  aria-label={"confirm password"}
                  type={"password"}
                  className={
                    confirmPasswordInputHasError
                      ? styles.invalidInput
                      : styles.input
                  }
                  value={confirmPasswordInputValue}
                  placeholder={"Confirm Password"}
                  onChange={confirmPasswordChangeHandler}
                  onBlur={confirmPasswordBlurHandler}
                ></Input>
                {confirmPasswordInputHasError &&
                  !formIsValid &&
                  !enteredconfirmPasswordIsValid && (
                    <p className={styles.errorText}>
                      Confirm Password must not be empty & must match password
                      password
                    </p>
                  )}
              </div>
              <Button
                type={"submit"}
                disabled={!formIsValid}
                value={isLoading ? "Loading..." : `Register${httpError}`}
                className={styles.createAccount}
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
