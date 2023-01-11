import React from "react";
import { Children } from "react";

const Label = ({ htmlFor, value, className }) => {
  return (
    <>
      <label className={className} htmlFor={htmlFor} value={value}>
        
      </label>
    </>
  );
};

export default Label;
