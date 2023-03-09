import React, { useState, useEffect } from "react";
import styles from "../Signup/signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";

import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

// import { auth } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

// import { Link, useNavigate } from "react-router-dom";
// import {
//   auth,
//   signInWithEmailAndPassword,
//   signInWithGoogle,
// } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  //   if (user) navigate("/dashboard");
  // }, [user, loading]);

  // const navigate = useNavigate();
  return (
    <Background
      children={
        <>
          <NavLogo />
          <div className={styles.loginWrapper}>
            <form className={styles.wrapper}>
              <div className={styles.email}>
                <Label htmlFor={"email"} className={styles.label}>
                  Email:
                </Label>
                <Input
                  aria-label={"email for login"}
                  type={"email"}
                  className={styles.input}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </div>
              <div className={styles.password}>
                <Label htmlFor={"password"} className={styles.label}>
                  Password:
                </Label>
                <Input
                  aria-label={"password for login"}
                  type={"password"}
                  className={styles.input}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                ></Input>
              </div>
              <div className={styles.loginBtns}>
                <Button
                  type={"submit"}
                  value={"Login"}
                  // onClick={() => signInWithEmailAndPassword(email, password)}
                ></Button>
                <p>or</p>
                <Button
                  type={"submit"}
                  value={"Login with Google"}
                  // onClick={signInWithGoogle}
                ></Button>
              </div>
            </form>
          </div>
        </>
      }
    ></Background>
  );
};

export default Login;
