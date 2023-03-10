import React, { useState, useEffect } from "react";
import styles from "../Signup/signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";

import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../firebase/firebase";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
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
                  // onClick={() => logInWithEmailAndPassword(email, password)}
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
