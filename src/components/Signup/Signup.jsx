import React from "react";
import styles from "./Signup.module.css";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";

const Signup = () => {
  return (
    <div>
      <div className={styles.login}>
        <div className={styles.wrapper}>
          <Label htmlFor={"email"}>Signup Email:</Label>
          <Input aria-label={"email for login"} type={"email"}></Input>
          <Label htmlFor={"password"}>Sign up Password:</Label>
          <Input aria-label={"password for login"} type={"password"}></Input>
        </div>
      </div>
    </div>
  );
};

export default Signup;
