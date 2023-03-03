import React, { useState } from "react";
import styles from "./Navlogo.module.css";
import logo from "./assets/logo.svg";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";

const Login = () => {
  return (
    <>
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
          <div className={styles.loginBtn}>
            <Button type={"submit"} value={"Login"}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

const Signup = () => {
  return (
    <>
      <NavLogo />
      <div className={styles.loginWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.username}>
            <Label htmlFor={"username"} className={styles.label}>
              Username:
            </Label>
            <Input
              aria-label={"username"}
              type={"text"}
              className={styles.input}
            ></Input>
          </div>
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
          <div className={styles.loginBtn}>
            <Button type={"submit"} value={"Sign Up"}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLogo = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [loginIsClicked, setLoginIsclicked] = useState(false);
  const [signUpIsClicked, setSignUpIsClicked] = useState(false);

  const loginClickHandler = () => {
    setLoginIsclicked(!loginIsClicked);
    setSignUpIsClicked(false);
    setIsNavExpanded(false);
  };
  const signUpClickHandler = () => {
    if (signUpIsClicked) {
      setSignUpIsClicked(false);
    } else {
      setSignUpIsClicked(true);
    }
    setLoginIsclicked(false);
    setIsNavExpanded(false);
  };
  if (loginIsClicked) {
    return (
      <>
        <div
          onClick={() => {
            setLoginIsclicked(!loginIsClicked);
          }}
          className={styles.LoginModalOverlay}
        ></div>
        <Login />
      </>
    );
  }
  if (signUpIsClicked) {
    return (
      <>
        <div
          onClick={() => {
            setSignUpIsClicked(false);
          }}
          className={styles.LoginModalOverlay}
        ></div>
        <Signup />
      </>
    );
  }
  return (
    <div className={styles.navlogo}>
      <div className="logo">
        <img src={logo} alt="page logo" />
      </div>
      <div
        onClick={() => {
          setIsNavExpanded(false);
        }}
        className={
          isNavExpanded
            ? `${styles.modalOverlay} ${styles.ulexpanded}`
            : styles.modalOverlay
        }
      ></div>
      <div className={styles.nav}>
        <ul
          className={
            isNavExpanded ? `${styles.ul} ${styles.ulexpanded}` : styles.ul
          }
          id="nav"
        >
          <li className={styles.li}>
            <a href="#">Home</a>
          </li>
          <li className={styles.li}>
            <a href="#">Landlord</a>
          </li>
          <li className={styles.li}>
            <a href="#">Tenants</a>
          </li>
          <li className={styles.li}>
            <a href="#">Contact Us</a>
          </li>
          <div className={styles.menuCta}>
            <Button
              className={styles.btn}
              onClick={loginClickHandler}
              value={"Login"}
            ></Button>
            <Button
              className={styles.btn}
              value={"Sign Up"}
              onClick={signUpClickHandler}
            ></Button>
          </div>
        </ul>
        <button
          className={styles.harmburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default NavLogo;
