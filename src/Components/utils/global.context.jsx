import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();
const initialState = {
    theme: 'light',
    
  };
  
  const themeReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
      default:
        console.log("hola");
        return state;
    }
  };

export const useTheme = () => {
    return useContext(ThemeContext);
};



  export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
  
    const toggleTheme = () => {
      dispatch({ type: 'TOGGLE_THEME' });
    };
  
    return (
      <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
