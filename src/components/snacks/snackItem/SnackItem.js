import React from "react";
import classes from "./SnackItem.module.scss";
import AddItemForm from "../addItemForm/AddItemForm";

const {
  snackItem,
  snackItem_details_container,
  snackItem_name,
  snackItem_description,
  snackItem_price,
} = classes;

export const SnackItem = (props) => {
  const price = `BDT ${props.price.toFixed(2)}`;
  return (
    <li className={snackItem}>
      <div className={snackItem_details_container}>
        <h3 className={snackItem_name}>{props.name}</h3>
        <div className={snackItem_description}>{props.description}</div>
        <div className={snackItem_price}>{price}</div>
      </div>
      <div>
        <AddItemForm id={props.id} capacity={props.capacity} />
      </div>
    </li>
  );
};
