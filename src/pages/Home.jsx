import React from 'react'

function Home() {
  return (
    <section className="page home">
      <div className="container hero">
        <h1 className="hero-title">Welcome to Kench</h1>
        <p className="hero-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="hero-cta">
          <a className="btn primary" href="/about">Explore About</a>
          <a className="btn" href="/contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Home


