import React from "react";
import { Main, AppContextProvider } from "z-index";

const App = () => {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
};

export default App;
