import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')

    // In a later step we can wire this to the backend
    setTimeout(() => setStatus('Thanks! We will get back to you shortly.'), 800)
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
              <input className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" required />
              <input type="email" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email address" required />
              <textarea rows="5" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="What are you looking to build?" required />
              <button className="mt-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-medium transition-colors">Send message</button>
              {status && <p className="text-slate-300 text-sm">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
