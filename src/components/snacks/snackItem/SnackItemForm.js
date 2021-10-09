import React, { useState } from "react";
import classes from "./SnackItemForm.module.scss";
import { Input, CartIcon } from "zeeland";

const { form, button } = classes;

const SnackItemForm = (props) => {
  const [availableItems, setAvailableItems] = useState(10);
  return (
    <form className={form}>
      <Input
        label="Capability"
        inputProps={{
          id: "capability" + props.id,
          type: "text",
          step: "1",
          defaultValue: `${availableItems}`,
          disabled: true,
          required: false,
        }}
      />
      <Input
        label="Amount"
        inputProps={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: `${availableItems}`,
          step: "1",
          defaultValue: "1",
          required: true,
        }}
      />
      <button className={button}>
        <span>Add &nbsp;to &nbsp;</span>{" "}
        <CartIcon style={{ width: "1.125rem", height: "1.125rem" }} />
      </button>
    </form>
  );
};

export default SnackItemForm;
