import React from 'react';
import Nav from './Nav';
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="site">
      <Nav />
      <main className="main">{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} Your Name · Built with React
      </footer>
    </div>
  );
}