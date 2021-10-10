import React, { useState } from "react";
import { AppContext } from "./AppContext";
import useStates from "./useStates";

export const AppContextProvider = (props) => {
  const { showCart, setShowCart, cart } = useStates();

  return (
    <AppContext.Provider value={{ showCart, setShowCart, cart }}>
      {props.children}
    </AppContext.Provider>
  );
};
