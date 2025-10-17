import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <AutoAwesomeIcon className="brand-icon" />
          <span className="brand-name">Kench</span>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li>
            <NavLink 
              to="/"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >Home</NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >About</NavLink>
          </li>
          <li>
            <NavLink 
              to="/services"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >Services</NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar


