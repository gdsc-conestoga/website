import useLocalStorage from "use-local-storage"

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <div data-theme={theme}>
    <button onClick={switchTheme}>Change theme</button>
    {children}
  </div>
}