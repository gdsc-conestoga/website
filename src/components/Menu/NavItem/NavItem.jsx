import { Link, useLocation } from "react-router-dom"

export default function NavItem({ label, path, onSelect }) {
  const location = useLocation();
  const { pathname } = location;

  return <li className={`nav-item ${pathname === path ? 'active' : ''}`}>
    <Link to={path} onClick={onSelect}>{label}</Link>
  </li>
}