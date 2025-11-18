export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">A quick look at the kinds of interactive visuals we can deliver.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 text-sm font-medium">Let’s build yours</a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={`https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop`} alt="Project" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm text-blue-300/80">Interaction</p>
                <h3 className="font-semibold">Immersive 3D Experience #{i}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
