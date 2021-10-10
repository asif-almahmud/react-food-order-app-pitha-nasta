import { useReducer } from "react";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const updatedItems = [...state, action.item];
  const updatedTotalAmount = state.totalAmount + action.item.price;
  switch (action.type) {
    case "ADD_ITEM":
      return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return initialCartState;
};

const useReducers = () => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  return { cartState, dispatchCartAction };
};

export default useReducers;
