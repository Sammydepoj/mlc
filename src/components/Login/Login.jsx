import React from "react";
import styles from "./Login.module.css";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";
import NavLogo from "../NavbarAndLogo/NavLogo";


const Login = (props) => {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.email}>
          <Label htmlFor={"email"} className={styles.label}>
            Email:
          </Label>
          <Input
            aria-label={"email for login"}
            type={"email"}
            className={StyleSheet.input}
          ></Input>
        </div>
        <Label htmlFor={"password"} className={styles.label}>
          Password:
        </Label>
        <Input
          aria-label={"password for login"}
          type={"password"}
          className={StyleSheet.input}
        ></Input>
      </div>
    </div>
  );
};

export default Login;
