import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        {/* 3D scene from Spline - replace with your own scene URL later if you like */}
        <Spline scene="https://prod.spline.design/1g4O1Pz1K6rv4z6b/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="text-blue-300/80 text-sm uppercase tracking-[0.25em]">Habeshan Tech</p>
        <h1 className="mt-3 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
          Digital Experiences in 3D
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-slate-300">
          We craft immersive 3D websites, interactive product demos, and rich visuals that bring your brand to life.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#services" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-medium transition-colors">Explore services</a>
          <a href="#contact" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-medium transition-colors">Start a project</a>
        </div>
      </div>
    </section>
  )
}
