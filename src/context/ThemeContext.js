import React, { createContext, useContext, useState } from 'react';

// Define default theme values (customize as needed)
const defaultTheme = {
  colors: {
    primary: '#1C4BF4',
    background: '#ffffff',
    text: '#000000',
  },
};


const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children, theme = defaultTheme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = (newTheme) => {
    setCurrentTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme in components
export const useTheme = () => useContext(ThemeContext);
