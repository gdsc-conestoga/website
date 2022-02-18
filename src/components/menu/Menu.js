import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={`menu ${toggle ? 'activehamburger' : ''}`}>
      <div className='logo'>
        <img src='./logo_GDSC.png' alt='GDSC' />
      </div>
      <ul className='nav'>
        <li className={`menu-item ${pathname === '/' ? 'active' : ''}`}>
          <Link to='/'>Home</Link>
        </li>
        <li
          className={`menu-item ${pathname === '/resources' ? 'active' : ''}`}>
          <Link to='/resources'>Resources</Link>
        </li>
        <li className={`menu-item ${pathname === '/calendar' ? 'active' : ''}`}>
          <Link to='/calendar'>Calendar</Link>
        </li>
        <li className={`menu-item ${pathname === '/blog' ? 'active' : ''}`}>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={() => setToggle(!toggle)}>
        <span className='line line_1'></span>
        <span className='line line_2'></span>
        <span className='line line_3'></span>
      </div>
    </div>
  );
}

export default Menu;
