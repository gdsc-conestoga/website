import { Link } from "react-router-dom"
import "./Menu.css"

function Menu() {
  return (
    <div className="menu">
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/resources">Resources</Link>
      <Link className="menu-item" to="/calendar">Calendar</Link>
      <Link className="menu-item" to="/blog">Blog</Link>
    </div>
  )
}

export default Menu;