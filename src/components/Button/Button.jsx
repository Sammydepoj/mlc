import React from "react";
import styles from "./button.module.css";

const Button = ({ type, name, value, disabled }) => {
  return (
    <div>
      <button
        type={type}
        name={name}
        className={styles.button}
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
};
export default Button;
