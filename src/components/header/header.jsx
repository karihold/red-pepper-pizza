import React from "react";
import ReactDOM from "react-dom";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/icons/red-pepper-logo.svg";
import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <nav className={`header-nav ${pathname === "/" ? "header-nav-frontpage" : ""}`}>
        <div className="logo-section">
          <Link className="logo-link" to="/">
            <img className="logo-image" src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-ul">
          <li className="nav-item">
            <Link className="nav-item-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/order">
              Order
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
