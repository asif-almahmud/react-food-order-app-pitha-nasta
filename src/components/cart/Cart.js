import React, { useContext } from "react";
import classes from "./Cart.module.scss";
import { Modal, AppContext } from "zeeland";

const {
  cart_container,
  cart_list_container,
  cart_list_heading,
  cart_list_items,
  cart_list_item,
  cart_summary_container,
  cart_total_amount,
  cart_actions_container,
  close_button,
  order_button,
} = classes;

const cartItems = [
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushrfhjfi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: "dfgdsgeg" },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: "2fghf", price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 452, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: "2fghf", price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
];

export const Cart = (props) => {
  const { setShowCart } = useContext(AppContext);

  return (
    <Modal>
      <div className={cart_container}>
        <div className={cart_list_container}>
          <ul className={cart_list_items}>
            <div className={cart_list_heading}>
              <span>Items</span>
              <span>Count (pcs)</span>
              <span>Price (BDT)</span>
            </div>
            {cartItems.map((item) => (
              <li key={item.id} className={cart_list_item}>
                <span>{item.name}</span>
                <span>
                  <span>-</span>
                  <span>{item.amount}</span>
                  <span>+</span>
                </span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cart_summary_container}>
          <div className={cart_total_amount}>
            <span>Total Amount</span>
            <span>35.62 BDT</span>
          </div>

          <div className={cart_actions_container}>
            <button className={close_button} onClick={() => setShowCart(false)}>
              Close
            </button>
            <button className={order_button} onClick={() => setShowCart(false)}>
              Order
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
