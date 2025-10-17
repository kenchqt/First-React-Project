import React from 'react'

function Services() {
  const items = [
    { title: 'Lorem Ipsum 1', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Lorem Ipsum 2', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Lorem Ipsum 3', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { title: 'Lorem Ipsum 4', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  ]

  return (
    <section className="page services">
      <div className="container">
        <h1>Services</h1>
        <div className="card-grid">
          {items.map((s) => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


