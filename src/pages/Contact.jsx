import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'

function Contact() {
  const [eggOpen, setEggOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

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

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = message.trim().toLowerCase()
    if (trimmed === '/hire kench') {
      setEggOpen(true)
      setMessage('')
      return
    }
    if (!message.trim()) return
    setSending(true)
    setTimeout(() => { setSending(false); setMessage('') }, 800)
  }

  // Removed typing animation on Contact

  return (
    <section className="page contact">
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

        <div className="social-links reveal reveal-2">
          <span className="social-label">Find me on:</span>
          <a className="social-btn" href="https://www.facebook.com/Kenshhh" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="social-icon" />
            <span>Facebook</span>
          </a>
        </div>

        {eggOpen && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Hire command success" onClick={() => setEggOpen(false)}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
              <div className="modal-titlebar">
                <strong>Command executed</strong>
                <button className="modal-close" onClick={() => setEggOpen(false)}>Close</button>
              </div>
              <div className="modal-body">
                <p>Kench is ready for your next big project 🚀.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact


