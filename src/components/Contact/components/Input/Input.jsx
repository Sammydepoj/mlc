import React from "react";

const Input = ({
  type,
  value,
  className,
  placeholder,
  id,
  onChange,
  onBlur,
}) => {
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
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
