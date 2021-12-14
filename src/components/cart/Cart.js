import React, { useContext } from "react";
import classes from "./Cart.module.scss";
import { Modal, AppContext } from "z-index";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const {
  cart_container,
  cart_list_container,
  cart_list_items,
  close_button_empty_cart,
  cart_list_item,
  remove_from_Cart,
  cart_summary_container,
  cart_total_amount,
  cart_actions_container,
  clear_button,
  close_button,
  order_button,
} = classes;

export const Cart = () => {
  const { setShowCart, cart } = useContext(AppContext);

  return (
    <Modal>
      <div className={cart_container}>
        <div className={cart_list_container}>
          <ul className={cart_list_items}>
            {cart.items.length < 1 && (
              <>
                <div>
                  <div style={{ textAlign: "center", margin: "2rem" }}>
                    {" "}
                    Your Cart is Empty.
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <button
                      className={close_button_empty_cart}
                      onClick={() => setShowCart(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>
            )}
            {cart.items.map((item) => (
              <li key={item.id} className={cart_list_item}>
                <span>{item.name}</span>
                <span>
                  <span
                    onClick={() => {
                      if (item.count > 0) {
                        cart.decreaseItemCount(item);
                      }
                    }}
                  >
                    <RemoveCircleOutlinedIcon />
                  </span>
                  <span>{item.count}</span>
                  <span
                    onClick={() => {
                      if (item.count < item.capacity) {
                        cart.increaseItemCount(item);
                      }
                      if (item.count === item.capacity) {
                        alert("Sorry, you have reached our capacity.");
                      }
                    }}
                  >
                    <AddCircleIcon />
                  </span>
                </span>
                <span>{item.price * item.count} tk</span>
                <span onClick={() => cart.removeItemFromCart(item)}>
                  <DeleteIcon />
                </span>
              </li>
            ))}
          </ul>
        </div>
        {cart.items.length > 0 && (
          <div className={cart_summary_container}>
            <div className={cart_total_amount}>
              <span>Total Amount</span>
              <span>{cart.totalAmount} BDT</span>
            </div>

            <div className={cart_actions_container}>
              <button
                className={clear_button}
                onClick={() => {
                  cart.makeCartEmpty();
                }}
              >
                Clear Cart
              </button>
              <span>
                <button
                  className={close_button}
                  onClick={() => setShowCart(false)}
                >
                  Close
                </button>
                <button
                  className={order_button}
                  onClick={() => {
                    cart.makeCartEmpty();
                    setShowCart(false);
                  }}
                >
                  Order
                </button>
              </span>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
