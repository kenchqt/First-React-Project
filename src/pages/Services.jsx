import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Services() {
  // Project gallery
  const projects = [
    {
      name: 'QR Code-Based Barangay Management System',
      cover: '/images/brgy-record-dev-images/1.png',
      images: Array.from({ length: 7 }, (_, i) => `/images/brgy-record-dev-images/${i + 1}.png`),
    },
    {
      name: 'Earthquake Relief System',
      cover: '/images/earthquake-relief-images/1.png',
      images: Array.from({ length: 8 }, (_, i) => `/images/earthquake-relief-images/${i + 1}.png`),
    },
    {
      name: 'Personal Website Portfolio',
      cover: '/images/kench-website-images/1.png',
      images: ['/images/kench-website-images/1.png'],
    },
  ]

  // Gallery state
  const [selected, setSelected] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)
  const openGallery = (project) => { setSelected(project); setImgIndex(0) }
  const closeGallery = () => setSelected(null)
  const nextImg = () => { setImgIndex((i) => (i + 1) % (selected?.images?.length || 1)) }
  const prevImg = () => { setImgIndex((i) => (i - 1 + (selected?.images?.length || 1)) % (selected?.images?.length || 1)) }

  return (
    <section className="page services">
      {/* Project cards */}
      <div className="container">
        <motion.h1 
          className="reveal text-center mb-8" 
          initial={{ opacity: 0, y: 6 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
        >
          <span className="relative inline-block mx-auto">
            <span className="text-transparent bg-clip-text text-3xl font-bold" style={{ backgroundImage: 'linear-gradient(90deg, rgba(0,255,255,0.9), rgba(102,178,255,0.9))' }}>
              In Development Projects
            </span>
            <span className="block h-[3px] mt-2 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(0,255,255,0.6), rgba(102,178,255,0.6))' }} />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-sm -z-10"></div>
          </span>
        </motion.h1>
        
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl blur-3xl opacity-30"></div>
          
          <div className="card-row three-cols max-w-6xl mx-auto relative z-10">
            {projects.map((p, i) => (
              <motion.div 
                key={p.name} 
                className={`card reveal reveal-${(i % 4) + 1} project-card group cursor-pointer`} 
                onClick={() => openGallery(p)}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 0 30px rgba(0,255,255,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                    <img src={p.cover} alt={p.name} className="w-full h-56 object-contain transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white text-sm px-3 py-1.5 rounded-full border border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg backdrop-blur-sm">
                      {p.images.length} images
                    </div>
                    <div className="absolute bottom-2 left-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm px-3 py-1.5 rounded-full border border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg backdrop-blur-sm">
                      Click to explore
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-center text-lg font-semibold mb-2 text-cyan-100">{p.name}</h3>
                  <p className="text-center text-sm" style={{ color: '#8f8fa3' }}>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                      In development
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image gallery */}
        {selected && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${selected.name} images`} onClick={closeGallery}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
              <div className="modal-titlebar">
                <strong>{selected.name}</strong>
                <button className="modal-close" onClick={closeGallery}>Close</button>
              </div>
              <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="flex items-center justify-center w-full h-[60vh]">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={selected.images[imgIndex]}
                      src={selected.images[imgIndex]}
                      alt={`${selected.name} ${imgIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'linear' }}
                      className="w-full h-full object-contain rounded-lg border border-[#1a1a1a]"
                    />
                  </AnimatePresence>
                </div>
                <div className="flex items-center justify-between">
                  <button className="btn" onClick={prevImg}>Prev</button>
                  <span style={{ color: '#8f8fa3' }}>{imgIndex + 1} / {selected.images.length}</span>
                  <button className="btn primary" onClick={nextImg}>Next</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services


