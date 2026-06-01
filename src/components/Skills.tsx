const skillGroups = [
  {
    category: "Frontend",
    icon: "⬡",
    skills: ["React", "TypeScript", "Vue", "JavaScript (ES6)", "Material UI", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    icon: "⬡",
    skills: ["Node.js", "Express.js", "Fastify", "NestJS", "Laravel", "PHP", "SQL", "MongoDB"],
  },
  {
    category: "DevOps & Tools",
    icon: "⬡",
    skills: ["AWS", "Docker", "CI/CD", "Git", "Cypress", "Jest", "Postman", "Confluence"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Tech Stack</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white/5 border border-white/8 rounded-2xl p-6 card-glow transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-violet-400 text-xl">{group.icon}</span>
                <h3 className="text-white font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/8 text-slate-300 hover:border-violet-500/40 hover:text-violet-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
