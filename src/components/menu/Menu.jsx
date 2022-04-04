import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CustomButton from '../customButton/customButton'
import './Menu.css'

function Menu({ onThemeChanged }) {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={`menu ${toggle ? 'activehamburger' : ''}`}>
      <div className='logo'>
        <img src='./logo.png' alt='GDSC' />
      </div>
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
      <CustomButton onClick={onThemeChanged} buttonText='Change theme' />
      <div className='hamburger' onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <img src='/close.svg' alt='Menu' />
        ) : (
          <img src='/menu.svg' alt='Menu' />
        )}
      </div>
    </div>
  );
}

export default Menu;