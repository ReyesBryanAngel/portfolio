export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">
          About
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Who I Am</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a Full Stack Developer and QA Engineer based in Manila, Philippines
              with over five years of experience designing and shipping production-grade
              web applications across fintech, gaming, and insurance domains.
            </p>
            <p>
              I care deeply about code quality, system reliability, and building tools
              that genuinely improve workflows. I&apos;m comfortable working across the
              entire stack — from React frontends to Laravel/Node.js backends — and
              equally at home writing Cypress test suites or architecting data
              migration pipelines.
            </p>
            <p>
              Currently at <span className="text-white font-medium">Cloud Employee</span>,
              where I&apos;m building automated compliance tooling and LLM-powered
              analysis systems for fintech workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: "Manila, Philippines" },
              { label: "Experience", value: "5+ Years" },
              { label: "Focus", value: "Full Stack / QA" },
              { label: "Available", value: "Open to offers" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/8 rounded-xl p-4"
              >
                <p className="text-xs text-violet-400 font-mono uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-white font-medium text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
