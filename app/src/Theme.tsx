import React, { useContext } from "react";
import { Context } from "./contextProvider";

export const Theme: React.FC = (): React.ReactNode => {
  const { darkMode, setDarkMode } = useContext(Context);
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => setDarkMode(!darkMode)}>ChangeTheme</button>
    </div>
  );
};
