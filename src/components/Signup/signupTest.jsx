import React, { useState, useEffect } from "react";
import styles from "./signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useFormik } from "formik";
// import { useAuth } from "../../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();

  // const { signup, googleSignIn } = useAuth();
  const [loading, setLoading] = useState(false);

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
                className={styles.input}
                placeholder={"Username"}
              ></Input>
              <Input
                aria-label={"email for login"}
                type={"email"}
                className={styles.input}
                placeholder={"Email"}
              ></Input>
              <Input
                aria-label={"password for login"}
                type={"password"}
                className={styles.input}
                placeholder={"Password"}
              ></Input>
              <Button
                type={"submit"}
                className={styles.createAccount}
                value={"Sign Up"}
                // onClick={onSubmit}
              ></Button>
              <Button type={"submit"} value={"Sign in with Google"}></Button>
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
