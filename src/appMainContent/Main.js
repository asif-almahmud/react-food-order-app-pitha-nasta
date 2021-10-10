import { useContext } from "react";
import classes from "./Main.module.scss";
import { Home, Cart, AppContext } from "z-index";

const { app_container, overflow_hidden, app_contents } = classes;

export const Main = () => {
  const { showCart } = useContext(AppContext);
  return (
    <div
      className={`${!showCart && app_container} ${showCart && overflow_hidden}`}
    >
      {showCart && <Cart />}
      <Home />
    </div>
  );
};
