import React, { useContext } from "react";
import { ContextProvider, Context } from "./contextProvider";
import { Landing } from "./pages/Landing";
import { Theme } from "./Theme";
import "./App.css";

const App = (): React.ReactNode => {
  return (
    <ContextProvider>
      <div>
        <Theme />
        <Landing />
      </div>
    </ContextProvider>
  );
};

export default App;
