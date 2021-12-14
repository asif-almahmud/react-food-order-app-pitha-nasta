import React, { useState, useEffect, useContext } from "react";
import classes from "./AddItemForm.module.scss";
import { Input, CartIcon } from "z-index";
import { AppContext } from "z-index";

const { form, button } = classes;

const AddItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const [capacity, setCapacity] = useState("");
  const [itemIsAdded, setItemIsAdded] = useState(false);
  const { cart } = useContext(AppContext);
  let itemNames = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount);
    cart.addItemToCart({ ...props.item, count: parseInt(amount, 10) });
  };

  useEffect(() => {
    setCapacity(props.capacity);
  }, [props.capacity]);

  useEffect(() => {
    if (cart.items.length > 0) {
      for (let x = 0; x < cart.items.length; x++) {
        itemNames.push(cart.items[x].name);
      }
    }

    if (itemNames.includes(props.item.name)) {
      setItemIsAdded(true);
    } else {
      setItemIsAdded(false);
    }

    console.log(itemNames);
    console.log(props.item.name);
    console.log(itemNames.includes(props.item.name));
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

      {!itemIsAdded && (
        <button className={button}>
          <span>Add &nbsp;to &nbsp;</span>{" "}
          <CartIcon style={{ width: "1.125rem", height: "1.125rem" }} />
        </button>
      )}
      {itemIsAdded && (
        <button
          className={button}
          disabled
          style={{ backgroundColor: "#003E4A" }}
        >
          <span>&nbsp; Added &nbsp;</span>
        </button>
      )}
    </form>
  );
};

export default AddItemForm;
