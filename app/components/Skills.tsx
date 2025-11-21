interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Figma", "Docker", "AWS", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-white dark:bg-black relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="bg-gray-50 dark:bg-gray-950 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-600 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            {["Problem Solving", "UI/UX Design", "Agile Methodology", "Team Collaboration"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-gray-800 dark:text-gray-200 font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

