import { useReducer } from "react";

// Cart Initial State

const initialCartState = {
  items: [],
  totalAmount: 0,
};

// Cart Reducer

const cartReducer = (state, action) => {
  let filteredCartState = [],
    updatedItems,
    updatedTotalAmount,
    reducedCartState;

  switch (action.type) {
    case "ADD_ITEM":
      filteredCartState = state.items.filter(
        (item) => item.name !== action.item.name
      );
      updatedItems = [...filteredCartState, action.item];
      updatedTotalAmount = updatedItems.reduce((total, current) => {
        return total + current.price * current.count;
      }, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "REMOVE_ITEM":
      filteredCartState = state.items.filter(
        (item) => item.name !== action.item.name
      );
      updatedItems = [...filteredCartState];
      updatedTotalAmount = updatedItems.reduce((total, current) => {
        return total + current.price * current.count;
      }, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "INCREASE_COUNT":
      reducedCartState = state.items.reduce((acc, elem) => {
        elem.name !== action.item.name && acc.push(elem);
        elem.name === action.item.name && acc.push(action.item);
        return acc;
      }, []);
      updatedItems = [...reducedCartState];
      updatedTotalAmount = updatedItems.reduce((total, current) => {
        return total + current.price * current.count;
      }, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "DECREASE_COUNT":
      reducedCartState = state.items.reduce((acc, elem) => {
        elem.name !== action.item.name && acc.push(elem);
        elem.name === action.item.name && acc.push(action.item);
        return acc;
      }, []);
      updatedItems = [...reducedCartState];
      updatedTotalAmount = updatedItems.reduce((total, current) => {
        return total + current.price * current.count;
      }, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    default:
      return { ...state };
  }
};

//

const useReducers = () => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  return { cartState, dispatchCartAction };
};

export default useReducers;
