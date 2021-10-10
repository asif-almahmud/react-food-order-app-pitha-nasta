import { useReducer } from "react";

const useActions = (dispatchCartAction) => {
  const addToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  return { addToCart, removeFromCart };
};

export default useActions;
