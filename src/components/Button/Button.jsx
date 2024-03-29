import React from "react";
import styles from "./button.module.css";

const Button = ({
  type,
  name,
  value,
  disabled,
  onClick,
  className,
  children,
}) => {
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
      {children}
    </button>
  );
};
export default Button;
