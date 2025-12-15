import React, { createContext, useReducer, useContext } from 'react';
import { themeReducer, themeInitialState } from '../reducers/themeReducer';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, themeInitialState);

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  const setTheme = (t) => dispatch({ type: 'SET_THEME', payload: t });

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
