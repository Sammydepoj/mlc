import React from 'react'
import styles from "../Signup/signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";

import NavLogo from "../NavbarAndLogo/NavLogo";

const Login = () => {
  return (
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
          <div className={styles.loginBtns}>
            <Button type={"submit"} value={"Login"}></Button>
            <p>or</p>
            <Button type={"submit"} value={"Login with Google"}></Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login