import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ activeSection, scrollToSection, onToggleTheme, theme }) {
  const items = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/education', label: 'Education' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/interests', label: 'Interests' },
    { to: '/contact', label: 'Contact' },
  ];
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__brand">Mohamad Ali Halwani</div>
      <ul className="navbar__menu">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              className={`navbar__link${location.pathname === item.to ? ' is-active' : ''}`}
              to={item.to}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <button className="navbar__link" onClick={onToggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'} mode
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


