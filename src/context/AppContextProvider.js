import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <AppContext.Provider value={{ showCart, setShowCart }}>
      {props.children}
    </AppContext.Provider>
  );
};
