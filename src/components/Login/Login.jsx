import React, { useState, useEffect } from "react";
import styles from "../Signup/signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import Label from "../Contact/components/Label/Label";

import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

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
              <h2>LOGIN</h2>
              <Input
                aria-label={"email for login"}
                type={"email"}
                className={styles.input}
                placeholder={"Email"}

                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              ></Input>

              <Input
                aria-label={"password for login"}
                type={"password"}
                className={styles.input}
                placeholder={"Password"}

                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <div className={styles.ctaRememberMe}>
                <span className="">
                  <input
                    type="checkbox"
                    name="remeber me"
                    id="remember"
                    required
                  />
                  <label htmlFor="remember">Remember Me</label>
                </span>
                <Link>Forgot Password ?</Link>
              </div>
              <Button
                type={"submit"}
                value={"Login"}
                // onClick={() => logInWithEmailAndPassword(email, password)}
              ></Button>
              <Button
                type={"submit"}
                value={"Login with Google"}
                // onClick={signInWithGoogle}
              ></Button>
              <p className={styles.already}>
                Don’t have an account ? <Link to="/signup">Register</Link>
              </p>
            </form>
          </div>
        </>
      }
    ></Background>
  );
};

export default Login;
