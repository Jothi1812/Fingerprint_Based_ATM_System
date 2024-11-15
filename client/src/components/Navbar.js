import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">FINGERPRINT ATM SYSTEM</h1>
      <div className="nav-links">
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
