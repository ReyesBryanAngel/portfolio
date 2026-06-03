type Project = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  // badge: string;
  badgeColor: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    name: "Complytica",
    tagline: "AI-Powered Compliance Automation",
    description:
      "A web application that automates the review of bank statements for KYC, AML, and compliance purposes. Designed for fintech and banking industries, it leverages LLMs to generate structured compliance reports — flagging risk indicators like missing salary income, loan stacking, and suspicious transaction patterns — saving analysts hours of manual review.",
    features: [
      "Automated KYC & AML bank statement analysis",
      "LLM-driven risk scoring with triggered checks",
      "Affordability, Gambling Exposure, Transaction Risk & Document Integrity workflows",
      "Batch file processing with real-time report generation",
    ],
    stack: ["Next.js", "Node.js", "TypeScript", "Claude AI", "Fastify", "Go"],
    // badge: "Personal Project",
    badgeColor: "violet",
    liveUrl: "https://complytica.vercel.app/workflows",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Personal Work
        </h2>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden card-glow transition-all duration-300"
            >
              {/* Header strip */}
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-blue-500" />

              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                      {/* <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25 font-medium">
                        {project.badge}
                      </span> */}
                    </div>
                    <p className="text-violet-300 text-sm font-medium">{project.tagline}</p>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium transition-colors duration-200 shrink-0"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live
                    </a>
                  )}
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Key Features
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((f, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400">
                        <span className="text-violet-500 shrink-0 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
