import React, { useState, useEffect, useContext } from "react";
import { CartIcon } from "zeeland";
import classes from "./HeaderCartButton.module.scss";
import { AppContext } from "zeeland";

const { cart_button, bump, icon, text, badge } = classes;

export const HeaderCartButton = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const { setShowCart } = useContext(AppContext);

  window.addEventListener("load", () => {
    setLoaded(true);
  });

  useEffect(() => {
    setLoaded(true);
  }, [cartItems]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
    return () =>
      window.removeEventListener("load", () => {
        setLoaded(true);
      });
  }, [loaded]);

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
      <span className={badge}>{cartItems}</span>
    </button>
  );
};
