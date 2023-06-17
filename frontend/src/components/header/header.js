import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#Cars">Cars</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact Us">Contact Us</a></li>
        </ul>
      </nav>
      <h1 className="header-title">Dream-Car</h1>
    </header>
  );
};

export default Header;