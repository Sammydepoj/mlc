import React from "react";

const Input = ({ type, value, className, placeholder, id, onChange }) => {
  return (
    <>
      <input
        multiple
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
