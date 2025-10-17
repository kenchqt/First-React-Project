import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
