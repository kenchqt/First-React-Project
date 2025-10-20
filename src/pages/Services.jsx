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
        <h1 className="reveal">In development projects</h1>
        <div className="card-row three-cols">
          {projects.map((p, i) => (
            <div key={p.name} className={`card reveal reveal-${(i % 4) + 1} group cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]`} onClick={() => openGallery(p)}>
              <div className="relative flex items-center justify-center">
                <img src={p.cover} alt={p.name} className="w-full h-56 object-contain" />
                <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-full border border-[#1a1a1a] bg-[#0f0f10]/70" style={{ color: '#8f8fa3' }}>{p.images.length} images</div>
              </div>
              <h3 className="text-center mt-3">{p.name}</h3>
              <p className="text-center" style={{ color: '#8f8fa3' }}>In development — click to preview</p>
            </div>
          ))}
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


