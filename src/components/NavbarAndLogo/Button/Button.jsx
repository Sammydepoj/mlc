import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, name, value, disabled, onClick, className }) => {
  return (
    <button
      type={type}
      name={name}
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
      value={value}
    >
      {value}
    </button>
  );
};
export default Button;
