import DarkMode from '@mui/icons-material/DarkMode'
import LightMode from '@mui/icons-material/LightMode'

export default function ThemeSwitcher({ theme, onThemeChanged, ...args }) {

  return <div {...args}>
    {
      theme === 'dark' 
        ? <LightMode onClick={onThemeChanged} cursor='pointer' fontSize='large' /> 
        : <DarkMode onClick={onThemeChanged} cursor='pointer' fontSize='large' />
    }
  </div>
}