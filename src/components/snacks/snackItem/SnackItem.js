import { useState } from "react";
import classes from "./SnackItem.module.scss";
import AddItemForm from "../addItemForm/AddItemForm";

const {
  snack_item,
  snack_item_details_container,
  snack_item_name,
  snack_item_description,
  snack_item_price,
} = classes;

export const SnackItem = (props) => {
  const price = `BDT ${props.price}`;
  return (
    <li className={snack_item}>
      <div className={snack_item_details_container}>
        <h3 className={snack_item_name}>{props.name}</h3>
        <div className={snack_item_description}>{props.description}</div>
        <div className={snack_item_price}>{price}</div>
      </div>
      <div>
        <AddItemForm id={props.id} capacity={props.capacity} item={props} />
      </div>
    </li>
  );
};
