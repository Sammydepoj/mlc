import React from "react";

const Input = ({
  type,
  value,
  className,
  placeholder,
  id,
  onChange,
  onBlur,
  step,
  min,
  max,
}) => {
  return (
    <>
      <input
        max={max}
        min={min}
        step={step}
        multiple={true}
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
