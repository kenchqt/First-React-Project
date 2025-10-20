import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaCss3Alt, FaHtml5, FaLaravel, FaPhp, FaJava } from 'react-icons/fa'

function Stack() {
  // Card flip state
  const [flippedCards, setFlippedCards] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)

  // Card flipping
  const toggleCardFlip = (cardTitle) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cardTitle)) {
        newSet.delete(cardTitle)
      } else {
        newSet.add(cardTitle)
      }
      return newSet
    })
  }

  // mouse tracking glow
  const handleMouseMove = (e, cardTitle) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    setHoveredCard(cardTitle)
    // hovered card glow
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
  }

  return (
    <section className="page stack">
      <div className="container">
        <motion.h1 
          className="reveal text-center mb-8" 
          initial={{ opacity: 0, y: 6 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
        >
          <span className="relative inline-block mx-auto">
            <span className="text-transparent bg-clip-text text-3xl font-bold" style={{ backgroundImage: 'linear-gradient(90deg, rgba(0,255,255,0.9), rgba(102,178,255,0.9))' }}>
              Tools I Use
            </span>
            <span className="block h-[3px] mt-2 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(0,255,255,0.6), rgba(102,178,255,0.6))' }} />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-sm -z-10"></div>
          </span>
        </motion.h1>
        
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl blur-3xl opacity-30"></div>
          
          <div className="card-row three-cols max-w-4xl mx-auto relative z-10">
            {[
              { title: 'React.js', icon: <FaReact />, color: '#61DAFB' },
              { title: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
              { title: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
              { title: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
              { title: 'PHP', icon: <FaPhp />, color: '#777BB4' },
              { title: 'Java', icon: <FaJava />, color: '#ED8B00' },
            ].map((t, i) => (
              <motion.div 
                key={t.title} 
                className={`card flip reveal reveal-${(i % 4) + 1} tech-card ${flippedCards.has(t.title) ? 'flipped' : ''}`} 
                onClick={() => toggleCardFlip(t.title)}
                onMouseMove={(e) => handleMouseMove(e, t.title)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ 
                  boxShadow: `0 0 20px ${t.color}40`,
                  borderColor: `${t.color}60`
                }}
                transition={{ duration: 0.3 }}
                style={{ position: 'relative', overflow: 'hidden', ['--glow']: `${t.color}60` }}
              >
                {/* Dynamic glow effect that follows mouse */}
                {hoveredCard === t.title && (
                  <div 
                    className="absolute pointer-events-none"
                    style={{
                      left: mousePosition.x - 50,
                      top: mousePosition.y - 50,
                      width: '100px',
                      height: '100px',
                      background: `radial-gradient(circle, ${t.color}40 0%, ${t.color}20 30%, transparent 70%)`,
                      borderRadius: '50%',
                      filter: 'blur(20px)',
                      zIndex: 1,
                      transition: 'all 0.1s ease-out'
                    }}
                  />
                )}
                
                <div className="flip-inner relative z-10">
                  <div className="flip-face">
                    <div className="flip-icon text-3xl" style={{ color: t.color }}>
                      {t.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flip-face flip-back">
                    <h3 className="text-center text-sm font-semibold" style={{ color: t.color }}>
                      {t.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stack
