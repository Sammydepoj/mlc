import React from "react";
import styles from "./button.module.css";

const Button = ({ type, name, value }) => {
  return (
    <div>
      <button type={type} name={name} className={styles.button}>
        {value}
      </button>
    </div>
  );
};
export default Button;
