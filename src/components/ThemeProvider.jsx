import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resources from "../pages/resources/Resources";
import Calendar from "../pages/calendar/Calendar";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/404/404";
import Menu from "./menu/Menu";
import useLocalStorage from "use-local-storage"

export function ThemeProvider() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <div data-theme={theme}>
    <BrowserRouter>
      <header>
        <Menu theme={theme} onThemeChanged={switchTheme} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  </div>
}