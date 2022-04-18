import { useState } from 'react'
import Close from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './Menu.css'
import Account from '../Account/Account'
import NavItem from './NavItem/NavItem'

function Menu() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`menu ${toggle ? 'activehamburger' : ''}`}>
      <div className='logo'>
        <img src='./logo.png' alt='GDSC' />
      </div>

      <div className="nav-group">
        <ul className='nav'>
          <NavItem label='Home' path='/' onSelect={() => setToggle(false)} />
          <NavItem label='Resources' path='/resources' onSelect={() => setToggle(false)} />
          <NavItem label='Calendar' path='/calendar' onSelect={() => setToggle(false)} />
          <NavItem label='Blog' path='/blog' onSelect={() => setToggle(false)} />
        </ul>

        <ThemeSwitcher className='menu-item' />
        <Account className='menu-item' />

        <div className='hamburger' onClick={() => setToggle(!toggle)}>
          {toggle ? <Close fontSize='large' /> : <MenuIcon fontSize='large' />}
        </div>
      </div>
    </div>
  );
}

export default Menu;
