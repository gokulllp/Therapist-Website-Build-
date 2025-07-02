import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      {submitted ? (
        <p className="text-green-600 text-center">Thank you! We’ll be in touch.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-6">
          <input name="name" required placeholder="Your Name" className="p-3 border rounded" />
          <input name="email" type="email" required placeholder="Your Email" className="p-3 border rounded" />
          <textarea name="message" required placeholder="Your Message" className="p-3 border rounded" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      )}
    </section>
  )
}
