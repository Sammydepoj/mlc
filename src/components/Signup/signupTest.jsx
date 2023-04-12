import React, { useState, useEffect } from "react";
import styles from "./signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

import { Link, useNavigate } from "react-router-dom";

import {
  signInWithGoogle,
  registerWithEmailAndPassword,
  auth,
} from "../../firebase/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const signUpSubmitHandler = (e) => {
    e.preventDefault();
    if (!userName) alert("Please enter a username");
    registerWithEmailAndPassword(userName, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <Background
      children={
        <>
          <NavLogo />
          <div className={styles.loginWrapper}>
            <form className={styles.wrapper} onSubmit={signUpSubmitHandler}>
              <h2>Register</h2>
              <Input
                aria-label={"username"}
                type={"text"}
                className={styles.input}
                placeholder={"Username"}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></Input>
              <Input
                aria-label={"email for login"}
                type={"email"}
                className={styles.input}
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Input
                aria-label={"password for login"}
                type={"password"}
                className={styles.input}
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <Button
                // type={"submit"}
                className={styles.createAccount}
                value={"Sign Up"}
              ></Button>
              <Button
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
