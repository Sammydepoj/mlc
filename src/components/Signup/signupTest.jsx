import React, { useState, useEffect } from "react";
import styles from "./signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

import useInput from "../../hooks/useInput";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

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
  return (
    <Background
      children={
        <>
          <NavLogo />
          <div className={styles.loginWrapper}>
            <form className={styles.wrapper}>
              <h2>Register</h2>
              <Input
                aria-label={"username"}
                type={"text"}
                className={
                  userNameInputHasError ? styles.invalidInput : styles.input
                }
                placeholder={"Username"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Input>
              <Input
                aria-label={"email for login"}
                type={"email"}
                className={
                  emailInputHasError ? styles.invalidInput : styles.input
                }
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Input
                aria-label={"password for login"}
                type={"password"}
                className={
                  passwordInputHasError ? styles.invalidInput : styles.input
                }
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <Button
                type={"submit"}
                className={styles.createAccount}
                value={"Sign Up"}
                onClick={register}
              ></Button>
              <Button
                type={"submit"}
                value={"Sign in with Google"}
                onClick={signInWithGoogle}
              ></Button>
              <p className={styles.already}>
                Already have an account ? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </>
      }
    ></Background>
  );
};

export default Signup;
