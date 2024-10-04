import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Create a custom hook to consume the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Create a Provider component to manage the theme state
export const ThemeProvider = ({ children }) => {
  // Default theme is light
  const [theme, setTheme] = useState('light');

  // The Effect hook to store the current state
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [theme]);


  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
