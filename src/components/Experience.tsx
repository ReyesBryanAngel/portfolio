const experiences = [
  {
    company: "Cloud Employee",
    role: "Full Stack Developer / QA Automation Engineer",
    type: "Contractor",
    period: "Aug 2025 – Present",
    highlights: [
      "Built end-to-end Cypress test suites measuring file upload and report generation performance across multiple compliance workflows.",
      "Implemented an LLM Output Consistency Analysis System in Node.js to score report reliability for KYC, Safer Gambling, and AML document reviews.",
      "Led data migration from Laravel/PHP to Fastify/TypeScript, maintaining 1:1 output parity across large MySQL datasets.",
      "Performed schema mapping, query optimisation, and consistency validation between legacy and modern systems.",
    ],
    stack: ["Cypress", "Node.js", "React", "Fastify", "Laravel", "Claude Code"],
  },
  {
    company: "Yondu Inc.",
    role: "Full Stack Developer",
    type: "Full Time",
    period: "Apr 2024 – Aug 2025",
    highlights: [
      "Integrated AWS Cognito into BPI Insurance's web app, enabling secure user management and custom auth flows.",
      "Designed a Renewal Quotation Tool for Pacific Cross to automate policy renewals with real-time premium recalculations.",
      "Built client-ready PDF generation with dynamic policy change summaries and discount applications.",
    ],
    stack: ["React", "TypeScript", "Laravel", "Express", "MongoDB", "AWS"],
  },
  {
    company: "Game Time Solutions Inc.",
    role: "Back End Developer",
    type: "Full Time · Remote",
    period: "Mar 2023 – Apr 2024",
    highlights: [
      "Designed and maintained backend APIs for gaming platforms handling draws, sessions, and player transactions.",
      "Implemented WebSocket event-driven architecture for real-time win notifications.",
      "Wrote unit tests across core backend functions to enable early defect detection and improve QA efficiency.",
    ],
    stack: ["Laravel", "SQL", "WebSockets", "Node.js", "Docker", "AWS"],
  },
  {
    company: "FinXP Ltd.",
    role: "Full Stack Developer",
    type: "Full Time · Remote",
    period: "Jul 2021 – Mar 2023",
    highlights: [
      "Built the Apply Corporate Application, streamlining client onboarding for FinXP's payment solutions.",
      "Integrated Maltese Creditor Identifier (CI) for internal customer tracking.",
      "Resolved critical production bugs and collaborated with senior devs to improve development workflows.",
    ],
    stack: ["React", "TypeScript", "Angular", "Laravel", "NestJS", "Docker", "CI/CD"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">
          Experience
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Work History</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="sm:pl-10 relative">
                {/* Dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500 ring-4 ring-[#0f0f13] hidden sm:block" />

                <div className="bg-white/5 border border-white/8 rounded-2xl p-6 card-glow transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                      <p className="text-violet-300 text-sm font-medium">
                        {exp.role}{" "}
                        <span className="text-slate-500 font-normal">· {exp.type}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="text-violet-500 mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
