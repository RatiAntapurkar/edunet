import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Foody</Link>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;