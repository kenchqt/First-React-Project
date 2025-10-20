import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaThLarge, FaEnvelope, FaMicrochip, FaCode } from 'react-icons/fa'

function NavBar() {
  // Navigation dock
  return (
    <nav className="dock" aria-label="Primary">
      <div className="dock-container">
        {/* Brand logo */}
        <div className="nav-brand" style={{ marginRight: '0.5rem', display: 'none' }}>
          <FaMicrochip className="brand-icon" />
        </div>
        {/* Nav links */}
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'dock-item active' : 'dock-item'}
        >
          <span className="dock-icon"><FaHome /></span>
          <span className="dock-label">Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'dock-item active' : 'dock-item'}
        >
          <span className="dock-icon"><FaUser /></span>
          <span className="dock-label">About</span>
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? 'dock-item active' : 'dock-item'}
        >
          <span className="dock-icon"><FaThLarge /></span>
          <span className="dock-label">Services</span>
        </NavLink>

        <NavLink
          to="/stack"
          className={({ isActive }) => isActive ? 'dock-item active' : 'dock-item'}
        >
          <span className="dock-icon"><FaCode /></span>
          <span className="dock-label">Stack</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'dock-item active' : 'dock-item'}
        >
          <span className="dock-icon"><FaEnvelope /></span>
          <span className="dock-label">Contact</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar


