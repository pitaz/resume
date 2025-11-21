import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  year: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
}

const projects: Record<string, Project> = {
  "1": {
    id: "1",
    title: "AI Tryouts - Tech Interview Practice",
    description:
      "A comprehensive platform for practicing technical interviews with AI-powered feedback and real-time coding challenges.",
    longDescription:
      "AI Tryouts is an innovative platform designed to help developers prepare for technical interviews through AI-powered practice sessions. The platform offers real-time coding challenges, personalized feedback, and comprehensive interview preparation tools.",
    tags: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS", "OpenAI API"],
    image: "/project-1.jpg",
    year: "2024",
    role: "Full-Stack Developer & Designer",
    challenge:
      "Creating an intuitive platform that combines AI technology with a seamless user experience for technical interview preparation. The challenge was to make complex AI interactions feel natural and helpful.",
    solution:
      "I developed a modern web application using Next.js and TypeScript, integrating OpenAI's API for intelligent feedback. The platform features a clean, distraction-free interface that focuses on the coding experience, with real-time syntax highlighting and instant AI feedback.",
    results: [
      "Improved interview success rate by 40% for users",
      "Over 10,000 practice sessions completed",
      "Average user satisfaction score of 4.8/5",
      "Reduced interview anxiety through consistent practice",
    ],
  },
  "2": {
    id: "2",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    longDescription:
      "A complete e-commerce solution built from the ground up, featuring a modern shopping experience, secure payment processing, and comprehensive admin tools for managing products, orders, and customers.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    image: "/project-2.jpg",
    year: "2023",
    role: "Full-Stack Developer",
    challenge:
      "Building a scalable e-commerce platform that handles high traffic, secure payments, and provides an excellent user experience across all devices.",
    solution:
      "Developed a robust full-stack application with React for the frontend and Node.js/Express for the backend. Integrated Stripe for secure payment processing and MongoDB for flexible data storage. Implemented responsive design and optimized performance.",
    results: [
      "Processed over $500K in transactions",
      "99.9% uptime achieved",
      "Average page load time under 2 seconds",
      "Mobile conversion rate of 35%",
    ],
  },
  "3": {
    id: "3",
    title: "Design System Library",
    description:
      "A comprehensive design system with reusable components, documentation, and design tokens for consistent UI development.",
    longDescription:
      "A complete design system that standardizes UI components across multiple products, reducing development time and ensuring visual consistency. Includes comprehensive documentation and Storybook integration.",
    tags: ["React", "Storybook", "TypeScript", "Figma", "Design Tokens"],
    image: "/project-3.jpg",
    year: "2024",
    role: "Design System Lead",
    challenge:
      "Creating a unified design system that serves multiple products and teams while maintaining flexibility and ease of use.",
    solution:
      "Built a comprehensive component library with React and TypeScript, documented with Storybook, and integrated design tokens from Figma. Created clear guidelines and examples for developers and designers.",
    results: [
      "Reduced development time by 50%",
      "Consistent UI across 5+ products",
      "100+ reusable components",
      "Improved design-to-code handoff efficiency",
    ],
  },
  "4": {
    id: "4",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with data visualization, custom reports, and interactive charts for business insights.",
    longDescription:
      "An advanced analytics platform that provides real-time insights into business metrics through interactive visualizations, custom report generation, and comprehensive data analysis tools.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Chart.js", "Real-time"],
    image: "/project-4.jpg",
    year: "2023",
    role: "Frontend Developer",
    challenge:
      "Creating an intuitive dashboard that makes complex data accessible and actionable for business users without technical expertise.",
    solution:
      "Developed a responsive dashboard using Next.js with D3.js and Chart.js for rich data visualizations. Implemented real-time updates using WebSockets and optimized for performance with large datasets.",
    results: [
      "Real-time data updates with <1s latency",
      "50% increase in data-driven decisions",
      "Support for 1M+ data points",
      "User adoption rate of 85%",
    ],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projects[resolvedParams.id];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link
              href="/#projects"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 mb-8 hover:gap-2 transition-all"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Projects
            </Link>

            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Year:
                  </span>{" "}
                  {project.year}
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Role:
                  </span>{" "}
                  {project.role}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                    {project.id}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Project Screenshot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-20 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-16">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  The Challenge
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  The Solution
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Key Results
                </h2>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-4 text-lg text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how we can bring your next project to life.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

