import { useContext } from "react";
import classes from "./Main.module.scss";
import { Home, Cart, AppContext } from "zeeland";

const { app_container, overflow_hidden, app_contents } = classes;

export const Main = () => {
  const { showCart } = useContext(AppContext);
  return (
    <div className={(app_container, showCart && overflow_hidden)}>
      {showCart && <Cart />}
      <Home />
    </div>
  );
};
