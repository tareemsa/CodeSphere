'use client'

import { motion, Variants } from 'framer-motion'
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa'
import { useState } from 'react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const FloatingInput = ({
  placeholder,
  type = 'text',
  icon: Icon,
  value,
  onChange,
}: {
  placeholder: string
  type?: string
  icon?: any
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div className="relative w-full">
    {Icon && (
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7F8499] peer-focus:text-[var(--color-secondary)] transition-colors duration-300" />
    )}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer w-full rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-midnight_text)] pl-12 pr-4 pt-6 pb-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all duration-300 shadow-sm hover:shadow-md"
    />
    <label className="absolute left-12 text-[var(--color-section)] transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-section)] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--color-secondary)]">
      {placeholder}
    </label>
  </div>
)

const FloatingTextArea = ({
  placeholder,
  rows = 5,
  icon: Icon,
  value,
  onChange,
}: {
  placeholder: string
  rows?: number
  icon?: any
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) => (
  <div className="relative w-full">
    {Icon && (
      <Icon className="absolute left-4 top-4 text-[#7F8499] peer-focus:text-[var(--color-secondary)] transition-colors duration-300" />
    )}
    <textarea
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer w-full rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-midnight_text)] pl-12 pr-4 pt-6 pb-3 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all duration-300 shadow-sm hover:shadow-md"
    ></textarea>
    <label className="absolute left-12 text-[var(--color-section)] transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-section)] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--color-secondary)]">
      {placeholder}
    </label>
  </div>
)

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('✅ Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('❌ ' + data.error)
      }
    } catch (err) {
      setStatus('⚠️ Failed to send message, please try again.')
    }

    setLoading(false)
  }

  return (
    <section className="min-h-screen bg-[var(--color-grey)] flex items-center justify-center py-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-white rounded-3xl w-full max-w-6xl p-12 md:p-16 border border-[var(--color-border)] shadow-xl flex flex-col md:flex-row gap-10"
      >
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[var(--color-dark_grey)] sm:text-5xl text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-[var(--color-light_grey)] text-lg sm:text-xl leading-relaxed">
            We’d love to hear your thoughts, ideas, or questions. Fill out the form and our team will get back to you promptly.
          </p>
          <div className="mt-8 text-[var(--color-light_grey)] text-sm sm:text-base space-y-2">
            <p>
              Email: <span className="text-[var(--color-midnight_text)]">hello@company.com</span>
            </p>
            <p>
              Phone: <span className="text-[var(--color-midnight_text)]">+963 959 375 952</span>
            </p>
            <p>
              Address: <span className="text-[var(--color-midnight_text)]">Rif Dimashq, Qura al-Sham, Kaziyat al-Ajami</span>
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <FloatingInput
              placeholder="Full Name"
              icon={FaUser}

          
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <FloatingInput
              placeholder="Email Address"
              type="email"
              icon={FaEnvelope}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <FloatingTextArea
              placeholder="Your Message"
              rows={6}
              icon={FaComment}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:from-[var(--color-secondary)] hover:to-[var(--color-primary)] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm text-[var(--color-midnight_text)]">{status}</p>}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
