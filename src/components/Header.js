import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <div>
    <nav className="navbar">
      <div class="nav-container">
        <Link to="/">
          <img className="nav-logo" src="logo-lt.png" alt="Logo"></img>
        </Link>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About</Link>
          <Link ><a href='#home-con-idea'>MyPick</a></Link>
          <Link to={"/Profile"} className="login-btn">
            <FontAwesomeIcon className="icon" icon={faUser} />
          </Link>
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default Header;