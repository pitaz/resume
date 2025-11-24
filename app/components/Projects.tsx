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
    id: "12",
    title: "Pocket by Piggvest",
    description:
      "Abeg is a peer-to-peer payment app that makes sending and receiving money easy, fast and fun. There's also the social element where you can request funds, spilt bills, create and join giveaways",
    tags: [
      "Javascript",
      "React",
      "React Native",
      "React Animated",
      "Jest",
      "Lottie",
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/abeg.png?alt=media&token=9281c5c6-0420-41aa-abf3-d0752a75a024",
    link: "https://abeg.app",
  },
  {
    id: "14",
    title: "Quikah",
    description:
      "Quika is an appointment booking app for businesses and professional people. Quika users can create to-do's, schedule appointments, manage events, get reminders and share their appointment details with their contacts. For a start (i.e. MVP), Quika will target event planners - who will use it to create events, schedule appointments on invitees Quika calendar and manages guests.",
    tags: [
      "Javascript/TypeScript",
      "React",
      "AWS",
      "React Testing Library",
      "Redux",
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/quika.png?alt=media&token=6d0e3b6d-53d2-4fa3-9be3-366841157b64",
    link: "https://www.quikah.com",
  },
  {
    id: "10",
    title: "Eastern Mountain Sports",
    description:
      "The most trusted source for outdoor apparel, gear & guidance for the outdoor adventurers.",
    tags: ["Javascript", "React", "Jest"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/ems.png?alt=media&token=ee04b1cf-bd69-4316-afca-a4026d326690",
    link: "https://ems.com",
  },
  {
    id: "1",
    title: "AI Tryouts - Tech Interview Practice",
    description:
      "A comprehensive platform for practicing technical interviews with AI-powered feedback and real-time coding challenges.",
    tags: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/tech-interview.png?alt=media&token=f930af1e-5aff-4a8c-a245-51d97b4b63a0",
  },
  {
    id: "2",
    title: "Legal Pets",
    description:
      "A comprehensive guide to legal pet ownership featuring detailed information about pet backgrounds, history, diet, and care guides with advanced search and filtering capabilities.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/pets.png?alt=media&token=5a28b2ab-359c-41f9-b03f-82b99e4eb408",
    link: "https://pets-wcc5.vercel.app/",
  },
  {
    id: "3",
    title: "React Native UI",
    description:
      "A comprehensive UI component library for React Native with TypeScript support, modern design system, accessibility features, and seamless cross-platform development for React Native and React Native Web.",
    tags: ["React Native", "TypeScript", "React Native Web", "UI Components"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/react%20native.png?alt=media&token=cbf6663a-116f-42bd-a299-a2215acba1b7",
    link: "https://www.rnativeui.dev/",
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with data visualization, custom reports, and interactive charts for business insights.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Chart.js"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/analytics.png?alt=media&token=72ae679a-cee3-496c-a46c-a0e7aed13249",
    link: "https://analyticsdb.vercel.app/",
  },
  {
    id: "11",
    title: "Bob's Stores",
    description:
      "Bob's Stores is your home for great deals on the footwear, workwear, teamwear and every day clothing your family always needs.",
    tags: ["Javascript", "React", "Jest"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/bobstores.png?alt=media&token=6ebab72b-13e0-4c74-895f-026b5187213f",
    link: "https://bobstores.com",
  },
  {
    id: "13",
    title: "Sabertooth Poker Club",
    description:
      "3D fully immersive metaverse with a sustainable, Play-to-Earn economy for all NFT communities.",
    tags: ["Javascript", "React", "Pubnub", "AWS", "React Testing Library"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/spc.png?alt=media&token=efb5ce39-c163-41b6-b128-3148fa0f20df",
    link: "https://www.sabertoothpokerclub.com/",
  },
  {
    id: "15",
    title: "Tellascape",
    description:
      "Tellascape is flipping the script on traditional social media by giving people a platform to seek real-world experiences, and share these moments in an authenticated fashion. Search the world near and far for things to do, or capture the memories closest to you.",
    tags: [
      "Javascript/TypeScript",
      "React",
      "React Native",
      "Firebase",
      "Jest",
      "Redux",
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/tellascape.png?alt=media&token=ee7c10dd-8785-4c52-8ecb-5ac6362bde2f",
  },
  {
    id: "16",
    title: "mAudition",
    description:
      "mAudition is the platform trusted by talent scouts and corporate brands to discover unique talents for projects and social initiatives. We remove the problems of transportation, security and logistics associated with hosting live auditions.",
    tags: ["Javascript", "React Native", "React Testing Library", "Redux"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/mAudition.webp?alt=media&token=294f7e04-0cc4-4849-8a68-c9a33ab3e7c7",
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
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
                <div className="flex items-center gap-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-2 transition-all"
                  >
                    Learn More
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
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-2 transition-all"
                    >
                      Visit Site
                      <svg
                        className="w-5 h-5 ml-1"
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
          ))}
        </div>
      </div>
    </section>
  );
}
