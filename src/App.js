import React from "react";
import { Main, AppContextProvider } from "zeeland";

const App = () => {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
};

export default App;
