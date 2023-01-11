import React from "react";

const Input = ({ type, value, className, placeholder, id }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        id={id}
      />
    </>
  );
};

export default Input;
