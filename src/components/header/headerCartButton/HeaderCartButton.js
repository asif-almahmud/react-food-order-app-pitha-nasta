import React, { useState, useEffect, useContext } from "react";
import { CartIcon } from "z-index";
import classes from "./HeaderCartButton.module.scss";
import { AppContext } from "z-index";

const { cart_button, bump, icon, text, badge } = classes;

export const HeaderCartButton = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const { setShowCart, cart } = useContext(AppContext);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
  }, [cart]);

  // console.log(showCart);

  return (
    <button
      className={`${cart_button} ${loaded && bump} `}
      onClick={() => setShowCart(true)}
    >
      <span className={icon}>
        <CartIcon />
      </span>
      <span className={text}>Your Cart</span>
      <span className={badge}>{cart.items.length}</span>
    </button>
  );
};
