import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      project_type: form.get('project_type') || 'website',
      budget: form.get('budget') || undefined,
      message: form.get('message'),
      source: 'website'
    }

    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.detail || 'Failed to send message')
      }

      setStatus('Thanks! We will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Start a project</h2>
            <p className="mt-4 text-slate-300">Tell us about your idea inspired by the reference site. We’ll craft a tailored 3D experience for you.</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-300 text-sm">We focus on performance, accessibility, and delightful visuals. Expect responsive design, smooth interactions, and maintainable code.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input name="name" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" required />
              <input name="email" type="email" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email address" required />
              <input name="company" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Company (optional)" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select name="project_type" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="3d-landing">3D Landing Page</option>
                  <option value="product-demo">Interactive Product Demo</option>
                  <option value="visual-effects">Animations & Visual Effects</option>
                  <option value="website">Website</option>
                  <option value="other">Other</option>
                </select>
                <select name="budget" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="">Budget range</option>
                  <option value="<$2k">Under $2k</option>
                  <option value="$2k-$5k">$2k–$5k</option>
                  <option value="$5k-$10k">$5k–$10k</option>
                  <option value=">$10k">$10k+</option>
                </select>
              </div>

              <textarea name="message" rows="5" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="What are you looking to build?" required />
              <button className="mt-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-medium transition-colors" disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Sending...' : 'Send message'}
              </button>
              {status && status !== 'Sending...' && <p className="text-green-400 text-sm">{status}</p>}
              {error && <p className="text-red-400 text-sm">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
