import { createContext, useContext, useReducer, useState } from "react";

const initialThemeState = { color: "light" };
const initialOdontologosState = [];

const GlobalStates = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIGHT":
      return { ...state, color: "light" };
    case "SET_DARK":
      return { ...state, color: "dark" };
    default:
      return state;
  }
};
const GlobalStatesProvider = ({ children }) => {
  const [odontologos, setOdontologos] = useState(initialOdontologosState);
  const [theme, dispatchTheme] = useReducer(themeReducer, initialThemeState);

  const value = {
    odontologos,
    setOdontologos,
    theme,
    dispatchTheme,
  };

  return (
    <GlobalStates.Provider value={value}>{children}</GlobalStates.Provider>
  );
};

export default GlobalStatesProvider;
export const useGlobalStatesContext = () => useContext(GlobalStates);
