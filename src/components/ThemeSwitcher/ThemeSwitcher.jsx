import DarkMode from '@mui/icons-material/DarkMode'
import LightMode from '@mui/icons-material/LightMode'
import { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'

export default function ThemeSwitcher({ ...args }) {
  const { theme, onThemeChanged } = useContext(ThemeContext)

  return <div {...args}>
    {
      theme === 'dark' 
        ? <LightMode onClick={onThemeChanged} cursor='pointer' fontSize='large' /> 
        : <DarkMode onClick={onThemeChanged} cursor='pointer' fontSize='large' />
    }
  </div>
}