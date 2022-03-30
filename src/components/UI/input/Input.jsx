import React from "react";
import classes from "./Input.module.css";

const Input = ({ ...props }) => {
  return <input type="text" className={classes.input} {...props} />;
};

export default Input;
