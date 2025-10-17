import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer statusbar" role="contentinfo">
      <div className="footer-inner">
        <div className="status-left">
          <span className="status-dot" aria-hidden>●</span>
          <span>© {year} Kench</span>
        </div>
        <nav className="status-nav" aria-label="Quick navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
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


