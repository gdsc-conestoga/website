import Close from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './Menu.css'

function Menu({ theme, onThemeChanged }) {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={`menu ${toggle ? 'activehamburger' : ''}`}>
      <div className='logo'>
        <img src='./logo.png' alt='GDSC' />
      </div>

      <div className='nav-group'>
        <ul className='nav'>
          <li className={`menu-item ${pathname === '/' ? 'active' : ''}`}>
            <Link to='/' onClick={() => setToggle(false)}>
              Home
            </Link>
          </li>
          <li
            className={`menu-item ${pathname === '/resources' ? 'active' : ''}`}>
            <Link to='/resources' onClick={() => setToggle(false)}>
              Resources
            </Link>
          </li>
          <li className={`menu-item ${pathname === '/calendar' ? 'active' : ''}`}>
            <Link to='/calendar' onClick={() => setToggle(false)}>
              Calendar
            </Link>
          </li>
          <li className={`menu-item ${pathname === '/blog' ? 'active' : ''}`}>
            <Link to='/blog' onClick={() => setToggle(false)}>
              Blog
            </Link>
          </li>
        </ul>
        
        <div className='hamburger' onClick={() => setToggle(!toggle)}>
          {toggle ? <Close fontSize='large' /> : <MenuIcon fontSize='large' />}
        </div>

        <ThemeSwitcher theme={theme} onThemeChanged={onThemeChanged} />
      </div>
    </div>
  );
}

export default Menu;
