import { useState } from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('home')

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
            <a 
              href="#home" 
              className={active === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActive('home')}
            >Home</a>
          </li>
          <li>
            <a 
              href="#about" 
              className={active === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActive('about')}
            >About</a>
          </li>
          <li>
            <a 
              href="#services" 
              className={active === 'services' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActive('services')}
            >Services</a>
          </li>
          <li>
            <a 
              href="#contacts" 
              className={active === 'contacts' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActive('contacts')}
            >Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar


