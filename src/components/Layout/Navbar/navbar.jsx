import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LogoABCBranca from '/src/assets/LogoABCBranca.png';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/', internal: false },
    { label: 'O que é ABC', href: '#sobre', internal: false },
    { label: 'Nossos materiais', href: '/materiais', internal: false },
    { label: 'Nossa Metodologia', href: '/metodologia', internal: true },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/">
            <img 
              src={LogoABCBranca} 
              alt="ABC das Emoções" 
              className="navbar-logo cursor-pointer" 
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Desktop */}
        <div className="navbar-menu-desktop">
          <ul className="navbar-nav-desktop">
            {menuItems.map((item, index) => (
              <li key={index} className="navbar-item-desktop">
                {item.internal ? (
                  <Link 
                    to={item.href} 
                    className="navbar-link-desktop"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    className="navbar-link-desktop"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Mobile */}
        <div className={`navbar-menu-mobile ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav-mobile">
            {menuItems.map((item, index) => (
              <li key={index} className="navbar-item-mobile">
                {item.internal ? (
                  <Link 
                    to={item.href} 
                    className="navbar-link-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    className="navbar-link-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}  
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
