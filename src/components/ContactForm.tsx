import { type FormEvent, useState } from 'react'

type ContactFormProps = {
  title: string
  description: string
}

export function ContactForm({ title, description }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    travelers: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', destination: '', travelDate: '', travelers: '' })
  }

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-wrapper">
        <div className="contact-form-heading">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full name *</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination">Dream destination *</label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">Select a destination</option>
              <option value="hunza-valley">Hunza Valley</option>
              <option value="kashmir-lakes">Kashmir Lakes</option>
              <option value="lahore-heritage">Lahore Heritage</option>
              <option value="custom">Custom itinerary</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="travelDate">Preferred travel date *</label>
              <input
                id="travelDate"
                name="travelDate"
                type="date"
                value={formData.travelDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="travelers">Number of travelers *</label>
              <select
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="1">1 traveler</option>
                <option value="2">2 travelers</option>
                <option value="3">3 travelers</option>
                <option value="4">4+ travelers</option>
              </select>
            </div>
          </div>

          <button type="submit" className="button button--primary button--full">
            Get trip details
          </button>

          {submitted && (
            <div className="form-success">
              <span>✓</span> Thanks! We'll send you a personalized trip plan shortly.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
