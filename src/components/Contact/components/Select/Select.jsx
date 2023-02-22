import React from "react";

const Select = ({ children, name, id, className, value, onChange, onBlur }) => {
  return (
    <>
      <select
        name={name}
        id={id}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {children}
      </select>
    </>
  );
};

export default Select;
