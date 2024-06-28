import React, { useContext } from "react";
import { Context } from "../../contextProvider";
type Props = {
  children: React.ReactNode;
};

export const Label: React.FC<Props> = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(Context);
  console.log(darkMode);
  return (
    <button style={darkMode ? { color: "red" } : { color: "pink" }}>
      {children}
    </button>
  );
};
