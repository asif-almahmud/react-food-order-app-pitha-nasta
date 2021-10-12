import { useState } from "react";
import classes from "./Input.module.scss";

const { input_container, input_label, input_field } = classes;

export const Input = ({ label, setValue, inputProps }) => {
  return (
    <div className={input_container}>
      <label htmlFor={inputProps.id} className={input_label}>
        {label}
      </label>
      <input
        {...inputProps}
        className={input_field}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
