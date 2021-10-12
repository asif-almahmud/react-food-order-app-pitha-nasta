import React, { useState, useEffect, useContext } from "react";
import classes from "./AddItemForm.module.scss";
import { Input, CartIcon } from "z-index";
import { AppContext } from "z-index";

const { form, button } = classes;

const AddItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const [capacity, setCapacity] = useState("");
  const { cart } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount);
    cart.addItemToCart({ ...props.item, count: parseInt(amount, 10) });
  };

  useEffect(() => {
    setCapacity(props.capacity);
  }, [props.capacity]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <form className={form} onSubmit={handleSubmit}>
      <Input
        label="Capacity"
        inputProps={{
          id: "capability" + `${props.id}`,
          type: "text",
          step: "1",
          defaultValue: `${capacity}`,
          disabled: true,
          required: false,
        }}
      />
      <Input
        label="Amount"
        setValue={setAmount}
        inputProps={{
          id: "amount" + `${props.id}`,
          type: "number",
          min: "1",
          max: `${capacity}`,
          step: "1",
          required: true,
          value: amount,
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
