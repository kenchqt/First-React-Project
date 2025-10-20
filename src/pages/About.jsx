import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFileAlt, FaGlobe, FaCog, FaCoffee, FaWrench, FaReact } from 'react-icons/fa'

function About() {
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [lines, setLines] = useState([])
  const [typedCmd, setTypedCmd] = useState('')
  const [cmdDone, setCmdDone] = useState(false)
  const termRef = useRef(null)
  
  const profile = [
    ' ',
    'Name: Kench Gervin Lawas',
    'Role: Frontend and Backend Developer',
    'Motto: "When Nothing goes right, go left"',
    '',
    'Skills: React, JavaScript, PHP, Laravel',
    'Location: Philippines',
    'Available for freelance projects',
  ]

  const skills = [
    {
      year: '2014',
      title: 'HTML & CSS',
      description: 'Built simple, responsive web pages.',
      color: '#E34F26',
      icon: <FaGlobe />,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      year: '2022',
      title: 'C Programming',
      description: 'Learned core programming logic and data structures.',
      color: '#00599C',
      icon: <FaCog />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2022',
      title: 'Java',
      description: 'Practiced OOP with small console projects.',
      color: '#ED8B00',
      icon: <FaCoffee />,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2023',
      title: 'PHP & Laravel',
      description: 'Built CRUD apps with MVC architecture.',
      color: '#FF2D20',
      icon: <FaWrench />,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      year: '2023',
      title: 'JavaScript & React',
      description: 'Created interactive UIs with components.',
      color: '#61DAFB',
      icon: <FaReact />,
      gradient: 'from-cyan-500 to-blue-500'
    }
  ]
  
  useEffect(() => {
    if (!terminalOpen) {
      setLines([])
      setTypedCmd('')
      setCmdDone(false)
      return
    }
    
    setLines([])
    setTypedCmd('')
    setCmdDone(false)
    
    const cmd = 'cat Kench_Profile.txt'
    let i = 0
    let cancelled = false
    
    const step = () => {
      if (cancelled) return
      if (i < cmd.length) {
        setTypedCmd(cmd.slice(0, i + 1))
        i++
        setTimeout(step, 80)
      } else {
        setCmdDone(true)
        const el = termRef.current
        if (el) { el.scrollTop = 0 }
        let i = 0
        const addNext = () => {
          if (cancelled || i >= profile.length) return
          setLines(prev => [...prev, profile[i]])
          i++
          setTimeout(addNext, 200)
        }
        setTimeout(addNext, 500)
      }
    }
    step()
    
    return () => { cancelled = true }
  }, [terminalOpen])

  return (
    <section className="page about min-h-screen flex flex-col relative overflow-hidden">

      <div className="container flex-1 flex flex-col justify-start pt-8 pb-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text text-5xl md:text-6xl font-bold" 
                    style={{ backgroundImage: 'linear-gradient(90deg, rgba(0,255,255,0.9), rgba(102,178,255,0.9))' }}>
                About Me
              </span>
              <div className="h-1 w-32 mx-auto mt-4 rounded-full" 
                   style={{ background: 'linear-gradient(90deg, rgba(0,255,255,0.6), rgba(102,178,255,0.6))' }} />
            </motion.h1>
            
            {/* Interactive Profile Card */}
            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/40 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Enhanced Avatar */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-2 rounded-3xl" 
                         style={{ background: 'linear-gradient(120deg, rgba(0,255,255,0.6), rgba(102,178,255,0.4))' }}>
                      <motion.img
                        src="/images/image.png"
                        alt="Kench chibi avatar"
                        className="w-32 h-32 object-contain rounded-3xl bg-[#0f0f10]"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="absolute -inset-4 rounded-3xl blur-xl opacity-30" 
                         style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(0,255,255,0.4), transparent 60%)' }} />
                    
                  </motion.div>
                  
                  {/* Profile Info */}
                  <div className="flex-1 text-left">
                    <motion.h2 
                      className="text-2xl font-bold text-white mb-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      Kench Gervin Lawas
                    </motion.h2>
                    <motion.p 
                      className="text-cyan-300 text-lg mb-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      Frontend & Backend Developer
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 mb-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                    </motion.p>
                    
                    {/* Interactive File Button */}
                    <motion.button 
                      onClick={() => setTerminalOpen(true)}
                      className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/40 hover:border-cyan-400/60 rounded-xl text-cyan-200 hover:text-cyan-100 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaFileAlt className="text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      <span className="font-mono text-base group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
                        Kench_Profile.txt
                      </span>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Journey */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-transparent bg-clip-text text-4xl md:text-5xl font-bold mb-4" 
                style={{ backgroundImage: 'linear-gradient(90deg, rgba(0,255,255,0.9), rgba(102,178,255,0.9))' }}>
              Learning Journey
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full" 
                 style={{ background: 'linear-gradient(90deg, rgba(0,255,255,0.6), rgba(102,178,255,0.6))' }} />
            <motion.p 
              className="text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              My evolution as a developer through the years
            </motion.p>
          </motion.div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.2
                }}
              >
                <div 
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 h-full min-h-[240px] flex flex-col items-center justify-center text-center border border-gray-600/40 transition-all duration-200 hover:shadow-lg"
                  style={{
                    '--hover-color': skill.color,
                    '--hover-glow': `${skill.color}40`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${skill.color}60`
                    e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.4)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Icon hover animations */}
                  <div 
                    className={`text-4xl mb-4 transition-all duration-300 ${
                      skill.title === 'C Programming' ? 'group-hover:animate-spin' :
                      skill.title === 'Java' ? 'java-shake' :
                      skill.title === 'JavaScript & React' ? 'js-react-dot' :
                      skill.title === 'HTML & CSS' ? 'group-hover:animate-ping' :
                      skill.title === 'PHP & Laravel' ? 'php-laravel-hammer' :
                      'group-hover:animate-pulse'
                    }`}
                    style={{ 
                      color: skill.color,
                      animationDuration: skill.title === 'C Programming' ? '2s' : 
                                      skill.title === 'Java' ? '1s' :
                                      skill.title === 'JavaScript & React' ? '2s' :
                                      skill.title === 'HTML & CSS' ? '2s' :
                                      skill.title === 'PHP & Laravel' ? '3s' : '2s'
                    }}
                  >
                    {skill.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 hover:text-white transition-colors duration-200" 
                      style={{ color: skill.color }}>
                    {skill.title}
                  </h3>
                  
                  {/* Year Badge */}
                  <div className="text-sm font-bold text-white mb-3 px-3 py-1 bg-gray-700/50 rounded-full">
                    {skill.year}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-200">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terminal Modal */}
        <AnimatePresence>
          {terminalOpen && (
            <motion.div 
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
              onClick={() => setTerminalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700 rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <strong className="text-cyan-300 text-sm ml-4">Terminal - Kench_Profile.txt</strong>
                  </div>
                  <button 
                    className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm transition-colors" 
                    onClick={() => {
                      setTerminalOpen(false)
                      setLines([])
                      setTypedCmd('')
                      setCmdDone(false)
                    }}
                  >
                    Close
                  </button>
                </div>
                <div ref={termRef} className="w-full h-96 overflow-y-auto bg-[#0f0f0f] p-6 font-mono text-sm rounded-b-2xl">
                  <div className="text-cyan-300 mb-4">
                    {typedCmd}{!cmdDone && <span className="inline-block w-2 h-4 bg-cyan-300 ml-1 animate-pulse">|</span>}
                  </div>
                  {lines.map((line, idx) => (
                    <div key={idx} className="text-cyan-200 mb-1">
                      {line}{idx === lines.length - 1 && <span className="inline-block w-2 h-4 bg-cyan-300 ml-1 animate-pulse">|</span>}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default About