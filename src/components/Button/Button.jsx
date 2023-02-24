import React from "react";
import styles from "./button.module.css";

const Button = ({ type, name, value, disabled, onClick }) => {
  return (
    <div>
      <button
        type={type}
        name={name}
        className={styles.button}
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};
export default Button;
