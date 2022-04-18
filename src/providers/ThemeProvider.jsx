import React from 'react'
import useLocalStorage from 'use-local-storage'

export const ThemeContext = React.createContext({
  theme: 'dark',
  onThemeChanged: () => {}
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <div data-theme={theme}>
    <ThemeContext.Provider value={{ theme: 'light', onThemeChanged: switchTheme }}>
      {children}
    </ThemeContext.Provider>
  </div>
}