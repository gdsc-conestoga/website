import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logIn, logOut } from '../../services/authService'
import CustomButton from '../customButton/customButton'
import './Menu.css'

function Menu() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const [user, setUser] = useState(null)

  const auth = getAuth();
  // useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log(user);
    setUser(user)
  });

  //   return () => unsubscribe()
  // }, [auth])

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
        {
          user 
            ? <img src={user.photoURL} alt='Profile' className='profile-image' onClick={logOut} />
            : <CustomButton buttonText='Log In' onClick={logIn} />
        }
      </ul>
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
