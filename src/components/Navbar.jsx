import { Link } from "react-router-dom";
import './styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-links">
        <li>
          <Link to="/home" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/info" className="navbar-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/productos" className="navbar-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
