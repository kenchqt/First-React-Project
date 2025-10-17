import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

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

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const v = validate(formData)
    setErrors(v)
    if (Object.keys(v).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section className="page contact">
      <div className="container">
        <h1>Contact</h1>
        <p>Have a question or just want to say hi? Drop a message below.</p>

        {submitted ? (
          <div className="alert success" role="status">
            Thanks, {formData.fullName}! Your message has been received.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <span className="form-error" id="fullName-error">{errors.fullName}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span className="form-error" id="email-error">{errors.email}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span className="form-error" id="message-error">{errors.message}</span>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="btn primary">Send Message</button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact


