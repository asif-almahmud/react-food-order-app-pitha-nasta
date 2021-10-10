import { useState, useReducer } from "react";
import useActions from "./useActions";
import useReducers from "./useReducers";

const useStates = () => {
  const [showCart, setShowCart] = useState(false);

  const { cartState, dispatchCartAction } = useReducers();

  const { addToCart, removeFromCart } = useActions(dispatchCartAction);

  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart,
    removeFromCart,
  };

  return { showCart, setShowCart, cart };
};

export default useStates;
