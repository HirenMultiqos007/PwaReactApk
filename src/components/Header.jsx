// src/components/Header.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
    <header>
      <h1>Hitesh</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
    <Outlet/>
    </>
  );
}

export default Header;
