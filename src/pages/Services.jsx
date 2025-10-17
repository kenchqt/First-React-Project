import React, { useState } from 'react'
import { FaReact, FaCss3Alt, FaHtml5, FaLaravel, FaPhp, FaDatabase, FaJava } from 'react-icons/fa'

function Services() {
  const [selected, setSelected] = useState(null)
  const items = [
    { title: 'React.js', desc: 'Simple UI components and interactions.', icon: <FaReact /> },
    { title: 'CSS', desc: 'Minimal design and styles.', icon: <FaCss3Alt /> },
    { title: 'HTML', desc: 'Basic structure and markup.', icon: <FaHtml5 /> },
    { title: 'Laravel', desc: 'API routes and controllers.', icon: <FaLaravel /> },
    { title: 'PHP', desc: 'Simple CRUD and basics.', icon: <FaPhp /> },
    { title: 'Java', desc: 'Java and OOP basics.', icon: <FaJava /> },
  ]

  return (
    <section className="page services">
      <div className="container">
        <h1 className="reveal">Currently learning</h1>
        <div className="card-row three-cols">
          {items.map((s, i) => (
            <div key={s.title} className={`card flip reveal reveal-${(i % 4) + 1}`} onClick={() => setSelected(s)}>
              <div className="flip-inner">
                <div className="flip-face">
                  <div className="flip-icon">{s.icon}</div>
                </div>
                <div className="flip-face flip-back">
                  <h3>{s.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${selected.title} details`} onClick={() => setSelected(null)}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
              <div className="modal-titlebar">
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="flip-icon">{selected.icon}</span>
                  {selected.title}
                </strong>
                <button className="modal-close" onClick={() => setSelected(null)}>Close</button>
              </div>
              <div className="modal-body">
                <p style={{ marginTop: 0 }}>{selected.desc}</p>
                <p style={{ color: '#8f8fa3' }}>More details can go here — setup notes, links, and examples.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services


