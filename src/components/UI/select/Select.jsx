import React from "react";
import classes from "./select.module.css";

const Select = ({ defaultValue, options, value, onChange }) => {
  return (
    <select
    value={value}
    onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => 
        <option key={option.value} value={option.value}>{option.name}</option>
        )}
    </select>
  );
}

export default Select;
