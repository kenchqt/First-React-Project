import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  // Typing animation
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

  // Simple cards
  function Card({ title, children }) {
    return (
      <div className="window card-simple">
        <div className="window-title">{title}</div>
        <div className="window-body">{children}</div>
      </div>
    )
  }

  return (
    <section className="page home">
      {/* Hero section */}
      <div className="container hero">
        <h1 className="hero-title fade-in">KenchOS — A Developer’s Interface</h1>
        <p className="hero-subtitle fade-in-delayed" aria-live="polite">
          {typedText}<span className="caret">|</span>
        </p>
        {/* Action buttons */}
        <div className="hero-cta fade-in-delayed-2">
          <Link className="btn primary" to="/about">About me</Link>
          <Link className="btn" to="/contact">Say hello</Link>
        </div>
        {/* Simple cards */}
        <div className="windows">
          <Card title="About">
            <p>Who I am and what I use.</p>
          </Card>
          <Card title="Services">
            <p>Tools and stacks I'm learning.</p>
          </Card>
          <Card title="Contact">
            <p>Best ways to reach me.</p>
          </Card>
          <Card title="Playground">
            <p>Small UI/UX experiments.</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Home


