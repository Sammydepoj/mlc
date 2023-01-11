import React from "react";

const Select = ({ children, name, id, className }) => {
  return (
    <>
      <select name={name} id={id} className={className}>
        {children}
      </select>
    </>
  );
};

export default Select;
