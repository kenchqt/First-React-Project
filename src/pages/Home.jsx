import React, { useEffect, useRef, useState } from 'react'

function Home() {
  // Typing animation for hero subtitle
  const [typedText, setTypedText] = useState('')
  const messages = [
    'Welcome to KenchOS',
    'Initializing creativity...',
    'Building ideas into reality.'
  ]
  const [msgIndex, setMsgIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = messages[msgIndex]
    const typingSpeed = 90
    const deletingSpeed = 45
    const endPauseMs = 1200
    const startPauseMs = 400

    let delay = deleting ? deletingSpeed : typingSpeed

    if (!deleting && charIndex === current.length) delay = endPauseMs
    if (deleting && charIndex === 0) delay = startPauseMs

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setTypedText(current.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setDeleting(true)
        }
      } else {
        if (charIndex > 0) {
          setTypedText(current.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setDeleting(false)
          setMsgIndex((msgIndex + 1) % messages.length)
        }
      }
    }, delay)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, msgIndex])

  // Cursor trail removed for a cleaner look

  // Simple draggable windows
  function Draggable({ title, children }) {
    const ref = useRef(null)
    useEffect(() => {
      const el = ref.current
      if (!el) return
      let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0
      const header = el.querySelector('.window-title')
      const down = (e) => { dragging = true; sx = e.clientX; sy = e.clientY; const r = el.getBoundingClientRect(); ox = r.left; oy = r.top }
      const move = (e) => { if (!dragging) return; const dx = e.clientX - sx; const dy = e.clientY - sy; el.style.transform = `translate(${ox+dx}px, ${oy+dy}px)` }
      const up = () => { dragging = false }
      header.addEventListener('mousedown', down)
      window.addEventListener('mousemove', move)
      window.addEventListener('mouseup', up)
      return () => { header.removeEventListener('mousedown', down); window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up) }
    }, [])
    return (
      <div className="window" ref={ref}>
        <div className="window-title">{title}</div>
        <div className="window-body">{children}</div>
      </div>
    )
  }

  return (
    <section className="page home">
      <div className="container hero">
        <h1 className="hero-title fade-in">KenchOS — A Developer’s Interface</h1>
        <p className="hero-subtitle fade-in-delayed" aria-live="polite">
          {typedText}<span className="caret">|</span>
        </p>
        <div className="hero-cta fade-in-delayed-2">
          <a className="btn primary" href="/about">About me</a>
          <a className="btn" href="/contact">Say hello</a>
        </div>
        <div className="windows">
          <Draggable title="About">
            <p>Who I am and what I use.</p>
          </Draggable>
          <Draggable title="Services">
            <p>Tools and stacks I’m learning.</p>
          </Draggable>
          <Draggable title="Contact">
            <p>Best ways to reach me.</p>
          </Draggable>
          <Draggable title="Playground">
            <p>Small UI/UX experiments.</p>
          </Draggable>
        </div>
      </div>
    </section>
  )
}

export default Home


