import React, { useState, useEffect } from "react";
import classes from "./AddItemForm.module.scss";
import { Input, CartIcon } from "z-index";

const { form, button } = classes;

const AddItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const [capacity, setCapacity] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setCapacity(props.capacity);
  }, [props.capacity]);

  return (
    <form className={form} onSubmit={onSubmitHandler}>
      <Input
        label="Capacity"
        inputProps={{
          id: "capability" + props.id,
          type: "text",
          step: "1",
          defaultValue: `${capacity}`,
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
          max: `${capacity}`,
          step: "1",
          defaultValue: `${amount}`,
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

export default AddItemForm;
