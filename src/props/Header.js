import React from 'react';
import { Link } from 'react-router-dom'
import routes from '../data/routes';
import Hamburger from './Hamburger.js';

const Header = () => (
  <header id="header">
    <div className="index-link">
    {routes.filter(l => l.index).map(l => (
            <Link key={l.label} to={l.path}>{l.label}</Link>
          ))}
    </div>

    <nav className="links">
      <ul>
        {routes.filter(l => !l.index).map(l => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="space">
      <Hamburger />
    </div>
  </header>
);

export default Header;
