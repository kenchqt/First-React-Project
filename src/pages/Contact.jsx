import React, { useState } from 'react'
import { FaFacebook, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Contact() {
  // Form state
  const [eggOpen, setEggOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [commandExecuted, setCommandExecuted] = useState(false)
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  // Form validation
  function validate(values) {
    const nextErrors = {}
    if (!values.fullName.trim()) nextErrors.fullName = 'Full name is required'
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address'
    }
    if (!values.message.trim()) nextErrors.message = 'Please enter a message'
    return nextErrors
  }

  // Submit handler
  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = message.trim().toLowerCase()
    if (trimmed === '/hire kench') {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setEggOpen(true)
      }, 2500)
      setMessage('')
      return
    }
    if (!message.trim()) return
    setSending(true)
    setTimeout(() => { 
      setSending(false)
      setCommandExecuted(true)
      setMessage('') 
    }, 800)
  }

  return (
    <section className="page contact">
      {/* Contact form */}
      <div className="container">
        <h1 className="reveal">Contact</h1>
        <div className="card mini-card reveal reveal-1" style={{ padding: '1rem' }}>
          <p style={{ margin: 0, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', color: '#cfcfcf' }}>
            Let's collaborate. Type your message below.
          </p>
        </div>

        <form className="contact-form reveal reveal-2" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="chat">Console</label>
            <textarea
              id="chat"
              name="chat"
              rows="3"
              placeholder="Type here... try /hire kench"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="ring chat-input"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn primary pulse" disabled={sending}>
              {sending ? 'Processing…' : 'Run Command'}
            </button>
          </div>
        </form>

        {/* Social links */}
        <div className="social-links reveal reveal-2">
          <span className="social-label">Find me on:</span>
          <a className="social-btn" href="https://www.facebook.com/Kenshhh" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="social-icon" />
            <span>Facebook</span>
          </a>
          <a className="social-btn" href="mailto:kg.lawas@gmail.com" aria-label="Gmail">
            <FaEnvelope className="social-icon" />
            <span>Gmail</span>
          </a>
        </div>

        {/* Boot loading animation */}
        {loading && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Loading" onClick={() => setLoading(false)}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
              <div className="modal-titlebar">
                <strong>Initializing KenchOS...</strong>
                <button className="modal-close" onClick={() => setLoading(false)}>Cancel</button>
              </div>
              <div className="modal-body" style={{ textAlign: 'center', padding: '2rem' }}>
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{ fontSize: '3rem', marginBottom: '1rem' }}
                >
                  🚀
                </motion.div>
                <div style={{ fontFamily: 'monospace', color: '#8f8fa3', marginBottom: '1rem' }}>
                  <div>Loading Kench's capabilities...</div>
                  <div style={{ marginTop: '0.5rem' }}>Preparing for launch...</div>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '4px', 
                  background: '#1a1a1a', 
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #00ffff, #66b2ff)',
                      borderRadius: '2px'
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Command executed modal */}
        {commandExecuted && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Command executed" onClick={() => setCommandExecuted(false)}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
              <div className="modal-titlebar">
                <strong>Command executed</strong>
                <button className="modal-close" onClick={() => setCommandExecuted(false)}>Close</button>
              </div>
              <div className="modal-body">
                <p>Your message has been processed.</p>
              </div>
            </div>
          </div>
        )}

        {/* Extra user interaction */}
        {eggOpen && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Hire command success" onClick={() => setEggOpen(false)}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
              <div className="modal-titlebar">
                <strong>Command executed</strong>
                <button className="modal-close" onClick={() => setEggOpen(false)}>Close</button>
              </div>
              <div className="modal-body">
                <div style={{ textAlign: 'center' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: 'backOut' }}
                    style={{ fontSize: '2rem', marginBottom: '1rem' }}
                  >
                    🚀
                  </motion.div>
                  <p>Kench is ready for your next big project!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact


