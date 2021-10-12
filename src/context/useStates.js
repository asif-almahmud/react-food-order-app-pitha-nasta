import { useState, useEffect, useReducer } from "react";
import useActions from "./useActions";
import useReducers from "./useReducers";

const useStates = () => {
  const [showCart, setShowCart] = useState(false);
  // const [cart, setCart] = useState({});

  const { cartState, dispatchCartAction } = useReducers();

  const {
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
  } = useActions(dispatchCartAction);

  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
  };

  // useEffect(() => {
  //   setCart(
  //     {

  //     }
  //   )
  // },[cartState])

  return { showCart, setShowCart, cart };
};

export default useStates;
