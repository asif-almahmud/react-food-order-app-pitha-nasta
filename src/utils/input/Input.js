import React from "react";
import classes from "./Input.module.scss";

const { input_container, input_label, input_field } = classes;

export const Input = (props) => {
  return (
    <div className={input_container}>
      <label htmlFor={props.inputProps.id} className={input_label}>
        {props.label}
      </label>
      <input {...props.inputProps} className={input_field} />
    </div>
  );
};
