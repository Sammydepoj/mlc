import React, { useState } from "react";
import styles from "../Signup/signup.module.css";
import Button from "../Button/Button";
import Input from "../Contact/components/Input/Input";
import NavLogo from "../NavbarAndLogo/NavLogo";
import Background from "../Background/Background";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Background
      children={
        <>
          <NavLogo />
          <div className={styles.loginWrapper}>
            <form className={styles.wrapper} onSubmit={formSubmitHandler}>
              <h2>LOGIN</h2>
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
