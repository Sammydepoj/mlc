import React, { useState, useEffect } from "react";
import styles from "../Signup/signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
} from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { BsApple } from "react-icons/bs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <Background
      children={
        <>
          <NavLogo />
          <div className={styles.loginWrapper}>
            <form
              className={styles.wrapper}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h2>Welcome Back!</h2>
              <div className={styles.socialLoginBtnContainer}>
                <Button
                  value={"Continue with Google"}
                  onClick={signInWithGoogle}
                  className={styles.googleLogin}
                >
                  <FcGoogle className={styles.icons} />
                </Button>

                <Button
                  value={"Continue with Facebook"}
                  onClick={signInWithGoogle}
                  className={styles.facebookLogin}
                >
                  <GrFacebookOption className={styles.icons} />
                </Button>

                <Button
                  value={"Continue with Apple"}
                  onClick={signInWithGoogle}
                  className={styles.appleLogin}
                >
                  <BsApple className={styles.icons} />
                </Button>
              </div>

              <div className={styles.ctaHeading}>
                <hr />
                <div>
                  <p className={styles.ctaDetails}>Or</p>
                </div>
              </div>
              <div className={styles.inputsWrapper}>
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
              </div>
              <div className={styles.ctaRememberMe}>
                <Link>Forgot Password ?</Link>
              </div>

              <Button
                type={"submit"}
                value={"Login"}
                onClick={() => logInWithEmailAndPassword(email, password)}
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
