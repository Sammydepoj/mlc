import React from "react";
import Input from "./components/Input/Input";
import Label from "./components/Label/Label";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h3 className={styles.contactHeader}>
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h3>
      <div className={styles.contactForm}>
        <h2 className={styles.formHeading}>Add A New Property</h2>
        <div className={styles.name}>
          <label className={styles.label} htmlFor="fullname">
            Name <span>*</span>
          </label>
          <Label
            htmlFor={"fullname"}
            className={styles.label}
            value={"Name <span>*</span>"}
          ></Label>
          <br></br>
          <Input
            type={"text"}
            className={styles.input}
            placeholder={"Enter Name"}
            id={"fullname"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
