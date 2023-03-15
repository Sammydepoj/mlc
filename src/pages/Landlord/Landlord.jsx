import React from "react";
import Background from "../../components/Background/Background";
import NavLogo from "../../components/NavbarAndLogo/NavLogo";
import styles from "./Landlord.module.css";
import Contact from "../../components/Contact/Contact";

const Landlord = () => {
  return (
    <Background>
      <NavLogo />
      <div className={styles.hero}>
        <h1>
          List Your <span>Space</span>
        </h1>
        <p>Be rest assured we help you make money renting out your space</p>
      </div>
      {/* <p className={styles.formheading}>
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </p> */}
      <div className={styles.contactWrapper}>
        <Contact />
      </div>
    </Background>
  );
};

export default Landlord;
