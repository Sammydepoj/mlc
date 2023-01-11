import React from "react";
import { Children } from "react";

const Label = ({ htmlFor, className, children }) => {
  return (
    <>
      <label className={className} htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
};

export default Label;
