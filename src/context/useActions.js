import { useReducer } from "react";

const useActions = (dispatchCartAction) => {
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (item) => {
    dispatchCartAction({ type: "REMOVE_ITEM", item: item });
  };

  const increaseItemCount = (item) => {
    dispatchCartAction({
      type: "INCREASE_COUNT",
      item: { ...item, count: item.count + 1 },
    });
  };

  const decreaseItemCount = (item) => {
    dispatchCartAction({
      type: "DECREASE_COUNT",
      item: { ...item, count: item.count - 1 },
    });
  };

  return {
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
  };
};

export default useActions;
