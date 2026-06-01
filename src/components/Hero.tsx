export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center animate-fade-in-up relative z-10">
        <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-4">
          Full Stack Developer · QA Engineer
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Angel Bryan</span>{" "}
          <span className="gradient-text">Reyes</span>
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          5+ years building scalable web applications. Passionate about clean
          architecture, developer experience, and shipping things that matter.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#experience"
            className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/10 hover:border-violet-500/60 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-violet-500/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
