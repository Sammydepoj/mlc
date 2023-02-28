import React from "react";
import styles from "./button.module.css";

const Button = ({ type, name, value, disabled, onClick }) => {
  return (
    <button
      type={type}
      name={name}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Button;
