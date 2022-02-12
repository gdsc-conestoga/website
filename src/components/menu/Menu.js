import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "../../assets/images/logo_GDSC.png";

function Menu() {
  return (
    <div className="menu">
      {/* <Link className="menu-header" to="/">
        <img src={logo} alt="gdsc logo"></img>
        <span>GDSC</span>
      </Link> */}
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/resources">
        Resources
      </Link>
      <Link className="menu-item" to="/calendar">
        Calendar
      </Link>
      <Link className="menu-item" to="/blog">
        Blog
      </Link>
    </div>
  );
}

export default Menu;
