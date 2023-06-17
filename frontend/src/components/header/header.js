import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="#Cars">Cars</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact Us</a></li>
        </ul>
      </nav>
      <h1 className="header-title">Dream-Carz</h1>
    </header>
  );
};

export default Header;