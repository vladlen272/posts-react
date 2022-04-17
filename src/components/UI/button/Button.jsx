import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, margin, ...props }) => {
  return (
    <button style={{margin: margin}} {...props} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
