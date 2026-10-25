import React from "react";
import {
  FaUserShield,
  FaCrown,
  FaCode,
  FaUniversity,
  FaLayerGroup,
  FaFileAlt,
  FaChartLine,
  FaEye,
  FaThLarge,
  FaChartPie,
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
  FaTabletAlt,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaReact,
  FaGithub,
} from "react-icons/fa";

const data = {
  lmsHighlights: [
    {
      title: "Role-Based Hierarchy",
      icon: "FaUserShield",
      description:
        "Super Admin, Admin, Learner – clean, scoped roles. Admins vary in power but use one label for simplicity and clarity.",
    },
    // {
    //   title: "Delegated Power",
    //   icon: "FaCrown",
    //   description:
    //     "Super Admins don't create users. Designed for smart delegation — not micromanagement.",
    // },
    {
      title: "Real-Time Code Compiler",
      icon: "FaCode",
      description:
        "Integrated Judge0 API to support multiple programming languages and allow learners to write, compile, and execute code in real-time.",
    },
    {
      title: "Colleges & Departments",
      icon: "FaUniversity",
      description:
        "Supports multiple colleges and departments with a clean structure for navigation and assignment control.",
    },
    {
      title: "Dynamic Batch System",
      icon: "FaLayerGroup",
      description:
        "Group students from different departments into batches for specialized training programs or short-term courses.",
    },
    {
      title: "Smart Assessments",
      icon: "FaFileAlt",
      description:
        "Admin-level test assignment flexibility: by department, batch, or individual student. Precision targeting for evaluations.",
    },
    // {
    //   title: "Academic Tracking",
    //   icon: "FaChartLine",
    //   description:
    //     "Training and assessments are linked to auto-generate detailed academic reports.",
    // },
    {
      title: "Activity Visibility",
      icon: "FaEye",
      description:
        "Track logins, failed attempts, tests taken — no student activity goes unnoticed.",
    },
    {
      title: "Custom Dashboards",
      icon: "FaThLarge",
      description:
        "Widget-based dashboards tailored to user roles. Add, remove, or reorder components as needed.",
    },
    {
      title: "Visual Reports",
      icon: "FaChartPie",
      description:
        "Academic data visualized through charts and tables. Exportable for external analytics or audits.",
    },
    {
      title: "Bulk Communication",
      icon: "FaBullhorn",
      description:
        "Send announcements and notifications at scale to learners and admins. Keeps everyone in sync.",
    },
  ],
  techStack: [
    {
      name: "React.js",
      icon: "FaReact",
      description: "Frontend UI library",
    },
    {
      name: "Node.js",
      icon: "FaServer",
      description: "Backend API server",
    },
    {
      name: "MongoDB",
      icon: "FaDatabase",
      description: "NoSQL database",
    },
    {
      name: "Responsive Design",
      icon: "FaMobileAlt",
      description: "Mobile-first approach",
    },
    {
      name: "Judge0 API",
      icon: "FaCode",
      description: "Code compilation service",
    },
    {
      name: "GitHub CI/CD",
      icon: "FaGithub",
      description: "Continuous integration",
    },
  ],
  useCases: [
    {
      role: "Super Admin",
      icon: "FaCrown",
      actions: [
        "Create colleges and departments",
        "Assign admins to institutions",
        "Monitor system-wide metrics",
        "Define global assessment parameters",
      ],
    },
    {
      role: "Admin",
      icon: "FaUserShield",
      actions: [
        "Manage students within departments",
        "Create batches and assign learners",
        "Design and deploy assessments",
        "Generate performance reports",
      ],
    },
    {
      role: "Learner",
      icon: "FaLaptopCode",
      actions: [
        "Complete assigned coursework",
        "Participate in coding exercises",
        "Take assessments and view results",
        "Track personal academic progress",
      ],
    },
  ],
  screenshots: [
    {
      title: "Admin Dashboard",
      description: "Complete overview of system metrics and activity",
      device: "FaDesktop",
      color: "bg-zeton-blue",
    },
    {
      title: "Code Compiler",
      description: "Real-time code editing and execution environment",
      device: "FaLaptopCode",
      color: "bg-zeton-red",
    },
    {
      title: "Student Progress",
      description: "Detailed academic tracking and visualization",
      device: "FaTabletAlt",
      color: "bg-slate-blue",
    },
    {
      title: "Mobile Experience",
      description: "Fully responsive design for learning on-the-go",
      device: "FaMobileAlt",
      color: "bg-coral-tint",
    },
  ],
};

// Map of icon names to components
const iconMap = {
  FaUserShield,
  FaCrown,
  FaCode,
  FaUniversity,
  FaLayerGroup,
  FaFileAlt,
  FaChartLine,
  FaEye,
  FaThLarge,
  FaChartPie,
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
  FaTabletAlt,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaReact,
  FaGithub,
};

const LMSShowcasePage = () => {
  // Helper function to get the icon component
  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <div className="min-h-screen">
      <div className="bg-background text-text-primary">
        {/* Hero Section */}
        <section
          className="bg-accent-gradient"
          //   style={{ minHeight: "calc(100vh - 64px)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modern Learning Management System
            </h1>
            <p className="text-xl md:text-2xl text-cool-white max-w-3xl mx-auto">
              A comprehensive solution designed for educational institutions to
              manage, track, and enhance learning experiences
            </p>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Powerful Features For Modern Education
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Our LMS combines intuitive design with powerful functionality to
                create a seamless learning experience for administrators and
                students alike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-zeton-blue p-4 rounded-full mb-6">
                  <FaCode className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Code Execution Environment
                </h3>
                <p className="text-text-secondary">
                  Integrated code compiler supporting multiple programming
                  languages. Students can write, test, and debug code directly
                  within the platform.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-zeton-red p-4 rounded-full mb-6">
                  <FaUniversity className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Multi-Institution Support
                </h3>
                <p className="text-text-secondary">
                  Designed to handle multiple colleges, departments, and
                  specialized training programs with a logical hierarchical
                  structure.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-slate-blue p-4 rounded-full mb-6">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Comprehensive Analytics
                </h3>
                <p className="text-text-secondary">
                  Track student progress, engagement, and performance with
                  detailed visual reports. Export data for further analysis.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-coral-tint p-4 rounded-full mb-6">
                  <FaUserShield className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Role-Based Access Control
                </h3>
                <p className="text-text-secondary">
                  Granular permission system ensures users only access
                  appropriate features and data based on their assigned role.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-8 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                LMS Highlights
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Discover the features that make our learning management system
                stand out from the competition
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.lmsHighlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon];
                return (
                  <div
                    key={index}
                    className="bg-surface rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-zeton-blue p-3 rounded-full">
                        {IconComponent && (
                          <IconComponent className="text-white text-xl" />
                        )}
                      </div>
                      <h3 className="ml-4 text-lg font-bold">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        {/* <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Role-Based Experience
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                See how different user types interact with the system to achieve
                their objectives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.useCases.map((useCase, index) => {
                const RoleIcon = iconMap[useCase.icon];
                return (
                  <div
                    key={index}
                    className="bg-background rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="bg-zeton-blue p-6 text-center">
                      {RoleIcon && (
                        <RoleIcon className="text-white text-4xl mx-auto mb-2" />
                      )}
                      <h3 className="text-xl font-bold text-white">
                        {useCase.role}
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {useCase.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start">
                            <svg
                              className="h-6 w-6 text-zeton-red flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-3 text-text-secondary">
                              {action}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* Technical Stack */}
        <section className="py-8 sm:py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4">
                Technical Stack
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Built with modern technologies to ensure speed, reliability, and
                scalability
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
              {data.techStack.map((tech, index) => {
                const TechIcon = iconMap[tech.icon];
                return (
                  <div
                    key={index}
                    className="bg-surface rounded-xl shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    {TechIcon && (
                      <div className="flex justify-center items-center h-12 sm:h-16">
                        <TechIcon className="text-zeton-blue text-2xl sm:text-3xl md:text-4xl" />
                      </div>
                    )}
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm">
                      {tech.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LMSShowcasePage;
