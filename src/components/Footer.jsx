import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">© {year} Kench · All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer


