const education = [
  {
    institution: "Emilio Aguinaldo College",
    degree: "Bachelor of Science in Computer Science",
    period: "2018 – 2022",
  },
  {
    institution: "Immaculate Conception Academy",
    degree: "Senior High School – STEM",
    period: "2014 – 2018",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">
          Education
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Background</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/8 rounded-2xl p-6 card-glow transition-all duration-300 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 1.5 4-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">{edu.institution}</h3>
                <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-white/5 self-start px-3 py-1 rounded-full">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
