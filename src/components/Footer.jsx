import React from 'react'

function Footer() {
  // Simple footer
  const year = new Date().getFullYear()
  return (
    <footer className="footer statusbar" role="contentinfo">
      <div className="footer-inner">
        {/* Copyright only */}
        <div className="text-center w-full">
          <span>© {year} Kench. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


