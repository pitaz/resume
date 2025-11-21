import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "AI Tryouts - Tech Interview Practice",
    description:
      "A comprehensive platform for practicing technical interviews with AI-powered feedback and real-time coding challenges.",
    tags: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    image: "/project-1.jpg",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/project-2.jpg",
  },
  {
    id: "3",
    title: "Design System Library",
    description:
      "A comprehensive design system with reusable components, documentation, and design tokens for consistent UI development.",
    tags: ["React", "Storybook", "TypeScript", "Figma"],
    image: "/project-3.jpg",
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with data visualization, custom reports, and interactive charts for business insights.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Chart.js"],
    image: "/project-4.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gray-50 dark:bg-gray-950 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 mx-auto rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Project Image
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-2 transition-all"
                >
                  View Case Study
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

