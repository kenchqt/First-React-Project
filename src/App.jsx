import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { FaMicrochip } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Stack from './pages/Stack'

function App() {
  const [booting, setBooting] = useState(true)
  const BOOT_DURATION_MS = 2500
  useEffect(() => {
    const t = setTimeout(() => setBooting(false), BOOT_DURATION_MS)
    return () => clearTimeout(t)
  }, [])
  return (
    <BrowserRouter>
      <div className="app" onMouseMove={(e) => {
        const root = e.currentTarget
        const x = (e.clientX / window.innerWidth) * 100 + '%'
        const y = (e.clientY / window.innerHeight) * 100 + '%'
        const buttons = root.querySelectorAll('.btn')
        buttons.forEach((b) => {
          b.style.setProperty('--x', x)
          b.style.setProperty('--y', y)
        })
      }}>
        {booting ? (
          <div className="boot-screen" style={{ ['--boot-speed']: '2.2s' }}>
            <div className="boot-inner">
              <div className="boot-icon"><FaMicrochip /></div>
              <div className="boot-title">KenchOS</div>
              <div className="boot-status">Initializing KenchOS…</div>
              <div className="boot-bar"><span /></div>
            </div>
          </div>
        ) : (
          <>
            <NavBar />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/stack" element={<Stack />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
