import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<ContextProps>({
  darkMode: false,
  setDarkMode: () => {},
});

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [darkModeOn, setDarkModeOn] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        darkMode: darkModeOn,
        setDarkMode: setDarkModeOn,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
