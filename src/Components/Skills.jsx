import { useEffect, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiThreedotjs, // Fixed from SiThreejs
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiSqlite,
  SiMysql,
  SiMongodb,

} from "react-icons/si";
import { FaCode, FaJava } from "react-icons/fa"; // Using FaJava as fallback
import skillsData from "../Details.json";

// Icon mapping with direct references to the imported components
const iconMap = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  ReactJs: SiReact,
  Bootstrap: SiBootstrap,
  TailwindCss: SiTailwindcss,
  ThreeJs: SiThreedotjs, // Fixed from SiThreejs to SiThreedotjs
  NodeJs: SiNodedotjs,
  ExpressJs: SiExpress,
  Django: SiDjango,
  C: SiC,
  "C++": SiCplusplus,
  Python: SiPython,
  Javascript: SiJavascript,
  Java: FaJava, // Using FaJava instead of SiJava
  Sqlite: SiSqlite,
  Mysql: SiMysql,
  Mongodb: SiMongodb,
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animate on scroll using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillItems = document.querySelectorAll(".skill-item");
    skillItems.forEach((item) => observer.observe(item));
    return () => skillItems.forEach((item) => observer.unobserve(item));
  }, [isVisible]);

  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 
          opacity-0 transform translate-y-4 transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : ""}`}
        >
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div
              key={index}
              className="skill-item bg-surface rounded-lg shadow-md border border-muted overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 transform translate-y-4"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary bg-accent-gradient p-4">
                <h2 className="font-subheading-alt text-xl text-white uppercase tracking-wide">
                  {category}
                </h2>
              </div>

              <div className="p-4 space-y-3">
                {skills.map((skill, idx) => {
                  // Get the icon component directly from our map
                  const IconComponent = iconMap[skill.name] || FaCode;

                  return (
                    <div
                      key={idx}
                      className="bg-background rounded-lg p-3 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-subheading text-text-primary">
                          {skill.name}
                        </span>

                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-5 h-5 mx-0.5 rounded-full flex items-center justify-center
                              ${
                                i < skill.rating
                                  ? "bg-surface shadow-sm"
                                  : "bg-background border border-muted opacity-20"
                              }`}
                            >
                              {i < skill.rating && (
                                <IconComponent className="text-lg text-secondary dark:invert" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="w-full bg-background rounded-full h-1.5 mt-2 overflow-hidden">
                        <div
                          className="bg-secondary h-1.5 rounded-full transition-all duration-1000 origin-left"
                          style={{
                            width: `${(skill.rating / 5) * 100}%`,
                            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                            transitionDelay: `${index * 100 + idx * 50}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Minimal animation CSS injection
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(styleSheet);

export default Skills;
