import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-16">
        <Hero3D />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Habeshan Tech · All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
