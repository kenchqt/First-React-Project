import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  // Status bar
  const year = new Date().getFullYear()
  return (
    <footer className="footer statusbar" role="contentinfo">
      <div className="footer-inner">
        {/* Copyright */}
        <div className="status-left">
          <span className="status-dot" aria-hidden>●</span>
          <span>© {year} Kench</span>
        </div>
        {/* Quick nav */}
        <nav className="status-nav" aria-label="Quick navigation">
          <Link to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</Link>
          <Link to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</Link>
          <Link to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</Link>
          <Link to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</Link>
        </nav>
        {/* System status */}
        <div className="status-right" aria-live="polite">
          <span>System: Stable</span>
          <span className="divider-dot">•</span>
          <span>Last Updated: Oct 2025</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


