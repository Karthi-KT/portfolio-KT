import { useEffect, useState } from "react";
import {
  Code2,
  GraduationCap,
  Brain,
  ClipboardCheck,
  Calendar,
  Building2,
} from "lucide-react";

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const jobItems = document.querySelectorAll(".job-item");
    jobItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const jobExperience = [
    {
      title: "Developer",
      company: "ZETON Technologies",
      duration: "Aug 2023 – Sep 2026",
      icon: Code2,
      description:
        "Developed the ZETON assessment platform to evaluate student performance, identify learning gaps, and analyze assessment integrity. Engineered an automated grading system and self-auditing question pipeline using LLM agents to validate problem statements and scoring, while integrating cognitive games (Geo-Sudo, Motion Challenge, Switch Challenge, Digit Challenge) and an AI-assisted mock interview tool to simulate real-world company evaluations.",
    },
    {
      title: "Aptitude and Technical Trainer",
      company: "Freelancer",
      duration: "Dec 2021 – Jul 2023",
      icon: GraduationCap,
      description:
        "Delivered comprehensive aptitude, programming, Data Structures and Algorithms (DSA), and MERN stack training across 30+ engineering colleges, mentoring over 10,000 students. Conducted high-impact CSAT (Civil Services Aptitude Test) preparation programs for multiple institutes, analyzing 15 years of question papers to identify recurring patterns, question types, and targeted preparation strategies.",
    },
    {
      title: "Academic Manager",
      company: "TCY",
      duration: "Dec 2020 – Dec 2021",
      icon: Brain,
      description:
        "Audited training sessions under the British curriculum and provided actionable feedback to improve instructional quality. Developed a metacognitive learning framework to address diverse learner needs and designed structured professional development modules to enhance trainers' pedagogy and delivery standards.",
    },
    {
      title: "Placement Trainer",
      company: "Multiple Institutions",
      duration: "May 2013 – Oct 2020",
      icon: ClipboardCheck,
      description:
        "Delivered aptitude, logical reasoning, soft skills, and technical training across colleges and educational institutions. Managed end-to-end curriculum planning, course material development, content delivery, and student mentoring, adapting training methodologies to institutional requirements and student learning styles.",
    },
  ];

  return (
    <div className="w-full py-4">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-heading text-primary relative inline-block pb-3">
          Professional Journey
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-accent-gradient transition-transform duration-700 origin-left"
            style={{
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            }}
          />
        </h1>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {jobExperience.map((job, index) => {
          const Icon = job.icon;

          return (
            <div
              key={`${job.company}-${job.title}`}
              className="job-item h-full flex flex-col opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full flex flex-col justify-between rounded-2xl border border-muted bg-surface p-6 md:p-7 shadow-md transition-all duration-300 hover:border-zeton-blue hover:shadow-xl">
                {/* Card Header */}
                <div>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zeton-blue/10 dark:bg-zeton-blue/30 text-zeton-blue dark:text-coral-tint border border-zeton-blue/20">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    {/* Title, Company & Duration */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <h2 className="font-heading text-lg md:text-xl text-zeton-red leading-snug">
                          {job.title}
                        </h2>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-subheading-alt bg-background border border-muted text-text-secondary self-start sm:self-auto shrink-0 whitespace-nowrap">
                          <Calendar size={13} className="text-zeton-blue dark:text-coral-tint shrink-0" />
                          {job.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-sm font-medium text-text-secondary">
                        <Building2 size={14} className="text-zeton-blue/70 dark:text-soft-gray shrink-0" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-4 border-t border-muted/50" />
                </div>

                {/* Description Paragraph */}
                <p className="flex-1 font-body text-sm leading-relaxed text-text-secondary">
                  {job.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .job-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .job-item {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Career;
