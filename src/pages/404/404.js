import './404.css'
import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page not Found</h1>
      <div>
        Return <Link to="/">home</Link>
      </div>
    </div>
  );
}

export default PageNotFound;