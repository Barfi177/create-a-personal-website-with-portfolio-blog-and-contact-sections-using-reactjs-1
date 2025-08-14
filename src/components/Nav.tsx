import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <header className="header">
      <div className="brand"><Link to="/">Your Name</Link></div>
      <nav className="nav">
        <NavLink to="/portfolio" className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink>
        <NavLink to="/blog" className={({isActive}) => isActive ? 'active' : ''}>Blog</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
      </nav>
    </header>
  );
}