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
  link?: string;
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
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/tech-interview.png?alt=media&token=f930af1e-5aff-4a8c-a245-51d97b4b63a0",
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
    title: "Legal Pets",
    description:
      "A comprehensive guide to legal pet ownership featuring detailed information about pet backgrounds, history, diet, and care guides with advanced search and filtering capabilities.",
    longDescription:
      "Legal Pets is a comprehensive platform designed to help pet owners and prospective pet owners make informed decisions about legal pet ownership. The platform features detailed information about various pets including their backgrounds, history, diet requirements, and comprehensive care guides. With advanced search and filtering capabilities, users can easily find the perfect pet for their lifestyle while staying informed about legal requirements and regulations.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/pets.png?alt=media&token=5a28b2ab-359c-41f9-b03f-82b99e4eb408",
    year: "2024",
    role: "Full-Stack Developer",
    link: "https://pets-wcc5.vercel.app/",
    challenge:
      "Creating an intuitive platform that provides comprehensive pet information while ensuring legal compliance and making it easy for users to find the perfect pet for their lifestyle through advanced search and filtering.",
    solution:
      "Developed a modern web application using Next.js and React with TypeScript for type safety. Implemented a responsive design with Tailwind CSS, featuring advanced search functionality, detailed pet profiles with care guides, and legal compliance information. The platform is optimized for performance and user experience.",
    results: [
      "Comprehensive pet database with detailed care guides",
      "Advanced search and filtering capabilities",
      "Legal compliance information for pet ownership",
      "User-friendly interface for discovering perfect pets",
    ],
  },
  "3": {
    id: "3",
    title: "React Native UI",
    description:
      "A comprehensive UI component library for React Native with TypeScript support, modern design system, accessibility features, and seamless cross-platform development for React Native and React Native Web.",
    longDescription:
      "React Native UI is a comprehensive UI component library designed specifically for React Native applications. Built with full TypeScript support, it provides developers with type-safe props and APIs. The library features a modern design system with consistent theming, customizable colors, spacing, and typography, along with built-in dark mode support. All components are WCAG compliant with proper screen reader support, keyboard navigation, and focus management for inclusive user experiences. The library is lightweight and optimized for both React Native and React Native Web, enabling seamless cross-platform development.",
    tags: ["React Native", "TypeScript", "React Native Web", "UI Components"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/react%20native.png?alt=media&token=cbf6663a-116f-42bd-a299-a2215acba1b7",
    year: "2024",
    role: "Open Source Maintainer",
    link: "https://www.rnativeui.dev/",
    challenge:
      "Creating a comprehensive, accessible, and type-safe UI component library for React Native that works seamlessly across mobile and web platforms while maintaining consistency and developer experience.",
    solution:
      "Developed a lightweight component library with full TypeScript support, ensuring type safety throughout. Implemented a modern design system with customizable theming and built-in dark mode. Focused on accessibility with WCAG compliance, proper screen reader support, and keyboard navigation. Built components that work seamlessly across React Native and React Native Web for true cross-platform development.",
    results: [
      "Full TypeScript support with comprehensive type definitions",
      "WCAG compliant components with accessibility features",
      "Seamless cross-platform support for React Native and Web",
      "Modern design system with customizable theming and dark mode",
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
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/analytics.png?alt=media&token=72ae679a-cee3-496c-a46c-a0e7aed13249",
    year: "2023",
    role: "Frontend Developer",
    link: "https://analyticsdb.vercel.app/",
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
  "10": {
    id: "10",
    title: "Eastern Mountain Sports",
    description:
      "The most trusted source for outdoor apparel, gear & guidance for the outdoor adventurers.",
    longDescription:
      "The most trusted source for outdoor apparel, gear & guidance for the outdoor adventurers.",
    tags: ["Javascript", "React", "Jest"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/ems.png?alt=media&token=ee04b1cf-bd69-4316-afca-a4026d326690",
    year: "Recent",
    role: "Developer at EMS",
    link: "https://ems.com",
    challenge:
      "Building a modern e-commerce platform that provides outdoor enthusiasts with easy access to quality gear and apparel while maintaining excellent performance and user experience.",
    solution:
      "Developed a robust React-based application using JavaScript, implementing comprehensive testing with Jest to ensure reliability and quality across the platform.",
    results: [
      "Improved user experience for outdoor gear shopping",
      "Enhanced platform performance and reliability",
      "Comprehensive test coverage ensuring quality",
    ],
  },
  "11": {
    id: "11",
    title: "Bob's Stores",
    description:
      "Bob's Stores is your home for great deals on the footwear, workwear, teamwear and every day clothing your family always needs.",
    longDescription:
      "Bob's Stores is your home for great deals on the footwear, workwear, teamwear and every day clothing your family always needs.",
    tags: ["Javascript", "React", "Jest"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/bobstores.png?alt=media&token=6ebab72b-13e0-4c74-895f-026b5187213f",
    year: "Recent",
    role: "Developer at Bob's Stores",
    link: "https://bobstores.com",
    challenge:
      "Creating an accessible and user-friendly e-commerce experience for families looking for quality clothing and footwear at great prices.",
    solution:
      "Built a modern React application with JavaScript, focusing on performance and user experience, with comprehensive testing using Jest to maintain high quality standards.",
    results: [
      "Enhanced shopping experience for families",
      "Improved platform reliability and performance",
      "Comprehensive test coverage",
    ],
  },
  "12": {
    id: "12",
    title: "Pocket by Piggvest",
    description:
      "Abeg is a peer-to-peer payment app that makes sending and receiving money easy, fast and fun. There's also the social element where you can request funds, spilt bills, create and join giveaways",
    longDescription:
      "Abeg is a peer-to-peer payment app that makes sending and receiving money easy, fast and fun. There's also the social element where you can request funds, spilt bills, create and join giveaways",
    tags: ["Javascript", "React", "React Native", "React Animated", "Jest", "Lottie"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/abeg.png?alt=media&token=9281c5c6-0420-41aa-abf3-d0752a75a024",
    year: "Recent",
    role: "Developer at Abeg Technologies",
    link: "https://abeg.app",
    challenge:
      "Building a comprehensive peer-to-peer payment platform with social features that makes financial transactions easy, fast, and engaging for users across web and mobile platforms.",
    solution:
      "Developed a cross-platform application using React for web and React Native for mobile, implementing smooth animations with React Animated and Lottie, with comprehensive testing using Jest to ensure reliability across all platforms.",
    results: [
      "Seamless payment experience across web and mobile",
      "Engaging social features for financial interactions",
      "Smooth animations enhancing user experience",
      "Comprehensive test coverage ensuring reliability",
    ],
  },
  "13": {
    id: "13",
    title: "Sabertooth Poker Club",
    description:
      "3D fully immersive metaverse with a sustainable, Play-to-Earn economy for all NFT communities.",
    longDescription:
      "3D fully immersive metaverse with a sustainable, Play-to-Earn economy for all NFT communities.",
    tags: ["Javascript", "React", "Pubnub", "AWS", "React Testing Library"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/spc.png?alt=media&token=efb5ce39-c163-41b6-b128-3148fa0f20df",
    year: "Recent",
    role: "Developer at Sabertooth Poker Club",
    link: "https://www.sabertoothpokerclub.com/",
    challenge:
      "Creating a fully immersive 3D metaverse experience with real-time multiplayer capabilities and a sustainable Play-to-Earn economy for NFT communities.",
    solution:
      "Built a sophisticated React application leveraging Pubnub for real-time communication, AWS for scalable infrastructure, and React Testing Library to ensure robust functionality across the platform.",
    results: [
      "Immersive 3D metaverse experience",
      "Real-time multiplayer capabilities",
      "Sustainable Play-to-Earn economy",
      "Scalable infrastructure on AWS",
    ],
  },
  "14": {
    id: "14",
    title: "Quikah",
    description:
      "Quika is an appointment booking app for businesses and professional people. Quika users can create to-do's, schedule appointments, manage events, get reminders and share their appointment details with their contacts. For a start (i.e. MVP), Quika will target event planners - who will use it to create events, schedule appointments on invitees Quika calendar and manages guests.",
    longDescription:
      "Quika is an appointment booking app for businesses and professional people. Quika users can create to-do's, schedule appointments, manage events, get reminders and share their appointment details with their contacts. For a start (i.e. MVP), Quika will target event planners - who will use it to create events, schedule appointments on invitees Quika calendar and manages guests.",
    tags: ["Javascript/TypeScript", "React", "AWS", "React Testing Library", "Redux"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/quika.png?alt=media&token=6d0e3b6d-53d2-4fa3-9be3-366841157b64",
    year: "Recent",
    role: "Developer at Quika",
    link: "https://quikah.com",
    challenge:
      "Building a comprehensive appointment booking and event management platform that helps businesses and professionals efficiently manage their schedules, appointments, and events while providing seamless calendar integration.",
    solution:
      "Developed a robust React application using TypeScript for type safety, Redux for state management, AWS for scalable backend infrastructure, and React Testing Library to ensure comprehensive test coverage and reliability.",
    results: [
      "Streamlined appointment booking experience",
      "Efficient event management for planners",
      "Seamless calendar integration",
      "Scalable infrastructure on AWS",
    ],
  },
  "15": {
    id: "15",
    title: "Tellascape",
    description:
      "Tellascape is flipping the script on traditional social media by giving people a platform to seek real-world experiences, and share these moments in an authenticated fashion. Search the world near and far for things to do, or capture the memories closest to you.",
    longDescription:
      "Tellascape is flipping the script on traditional social media by giving people a platform to seek real-world experiences, and share these moments in an authenticated fashion. Search the world near and far for things to do, or capture the memories closest to you.",
    tags: ["Javascript/TypeScript", "React", "React Native", "Firebase", "Jest", "Redux"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/tellascape.png?alt=media&token=ee7c10dd-8785-4c52-8ecb-5ac6362bde2f",
    year: "Recent",
    role: "Developer at Tellascape",
    challenge:
      "Creating an innovative social platform that focuses on authentic real-world experiences rather than traditional social media, requiring seamless cross-platform functionality and authenticated content sharing.",
    solution:
      "Built a cross-platform application using React for web and React Native for mobile, leveraging Firebase for backend services, Redux for state management, and Jest for comprehensive testing to ensure reliability across all platforms.",
    results: [
      "Authentic experience-sharing platform",
      "Seamless cross-platform experience",
      "Authenticated content sharing",
      "Enhanced user engagement with real-world focus",
    ],
  },
  "16": {
    id: "16",
    title: "mAudition",
    description:
      "mAudition is the platform trusted by talent scouts and corporate brands to discover unique talents for projects and social initiatives. We remove the problems of transportation, security and logistics associated with hosting live auditions.",
    longDescription:
      "mAudition is the platform trusted by talent scouts and corporate brands to discover unique talents for projects and social initiatives. We remove the problems of transportation, security and logistics associated with hosting live auditions.",
    tags: ["Javascript", "React Native", "React Testing Library", "Redux"],
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/mAudition.webp?alt=media&token=294f7e04-0cc4-4849-8a68-c9a33ab3e7c7",
    year: "Recent",
    role: "Developer at Learnry",
    challenge:
      "Building a mobile-first platform that enables talent discovery and auditions without the traditional barriers of transportation, security, and logistics, making talent scouting more accessible and efficient.",
    solution:
      "Developed a React Native mobile application with Redux for state management and React Testing Library for comprehensive testing, creating a seamless experience for talent scouts and performers.",
    results: [
      "Eliminated barriers to talent discovery",
      "Streamlined audition process",
      "Enhanced accessibility for talent scouts",
      "Improved efficiency in talent recruitment",
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
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400 items-center">
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-all"
                  >
                    Visit Site
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
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

