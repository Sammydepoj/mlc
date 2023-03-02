import React from "react";
import styles from "./Login.module.css";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";
import NavLogo from "../NavbarAndLogo/NavLogo";

const Login = (props) => {
  return (
    <div>
      <NavLogo />
      <div className={styles.loginWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.email}>
            <Label htmlFor={"email"} className={styles.label}>
              Email:
            </Label>
            <Input
              aria-label={"email for login"}
              type={"email"}
              className={styles.input}
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
            ></Input>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.email}>
            <Label htmlFor={"email"} className={styles.label}>
              Email:
            </Label>
            <Input
              aria-label={"email for login"}
              type={"email"}
              className={styles.input}
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
            ></Input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
