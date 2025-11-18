import { Code2, Box, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Box,
    title: '3D Landing Pages',
    desc: 'Hero sections and microsites with real-time 3D to wow your visitors.'
  },
  {
    icon: Code2,
    title: 'Interactive Product Demos',
    desc: 'Orbit, zoom, and configure your product directly in the browser.'
  },
  {
    icon: Sparkles,
    title: 'Animations & Visual Effects',
    desc: 'Framer Motion and WebGL effects for delightful interactions.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Services</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Based on the reference site, here’s a focused suite built for performance and style.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <Icon className="w-8 h-8 text-blue-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
