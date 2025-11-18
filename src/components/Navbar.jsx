import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-white font-semibold tracking-tight">Habeshan 3D Studio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600/90 hover:bg-blue-500 text-white px-4 py-2 text-sm transition-colors">
              Get in touch
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-blue-600/90 hover:bg-blue-500 text-white px-4 py-2 text-sm transition-colors">
              Get in touch
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
