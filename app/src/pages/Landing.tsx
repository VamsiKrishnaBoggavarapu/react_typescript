import React, { useContext } from "react";
import { Context } from "../contextProvider";
import "../App.css";

export const Landing = () => {
  const { darkMode } = useContext(Context);
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <h1>Hello</h1>
    </div>
  );
};
