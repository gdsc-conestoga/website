import { useContext } from "react"
import { ThemeContext } from "../providers/ThemeProvider"

export function ThemeComponent({ children }) {
  // const [theme, setTheme] = useLocalStorage('theme', 'dark')
  // const switchTheme = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }

  const { theme } = useContext(ThemeContext)

  return <div data-theme={theme}>{children}</div>
}