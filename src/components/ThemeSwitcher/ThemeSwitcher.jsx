import DarkMode from '@mui/icons-material/DarkMode'
import LightMode from '@mui/icons-material/LightMode'

export default function ThemeSwitcher({ theme, onThemeChanged }) {

  return theme === 'dark' 
  ? <LightMode onClick={onThemeChanged} cursor='pointer' fontSize='large' /> 
  : <DarkMode onClick={onThemeChanged} cursor='pointer' fontSize='large' />
}