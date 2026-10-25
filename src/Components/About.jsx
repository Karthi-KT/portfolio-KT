import { useEffect, useState } from "react";
import { Sparkles, Quote, Heart, Laugh } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const hobbies = [
    {
      imgSrc: `${import.meta.env.BASE_URL}Memes.png`,
      title: "Meme Creator",
      badge: "Humor in Learning",
      description:
        "Teaching through humor is the ultimate joy. Adapting to modern trends and creating memes to deliver technical concepts keeps both me and my students deeply engaged with the subject.",
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}cards.png`,
      title: "Fun with Playing Cards",
      badge: "Math & Logic",
      description:
        "Combining card tricks with mathematical concepts. Developed an intuitive framework to explain complex Modular Arithmetic theorems using playing cards.",
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}writing.jpg`,
      title: "Storytelling & Writing",
      badge: "Empathy & Expression",
      description:
        "Passionate about turning everyday life observations into vivid stories, bringing even the smallest moments to life with depth, empathy, and color.",
    },
  ];

  return (
    <div className="w-full py-4 md:py-6">
      {/* Two-column layout on desktop to ensure everything fits the screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: About Me Card */}
        <div
          className={`lg:col-span-6 bg-surface rounded-2xl border border-muted p-6 md:p-7 shadow-md flex flex-col justify-between transition-all duration-700 hover:border-zeton-blue hover:shadow-xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-heading text-primary relative inline-block pb-2">
                About Me
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-accent-gradient transition-transform duration-700 origin-left"
                  style={{
                    transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </h2>
            </div>

            {/* Intro paragraph */}
            <p className="font-body text-sm md:text-base text-text-primary leading-relaxed mb-4">
              I am someone with a natural knack for bringing humor and warmth into everything I do. With years of experience blending technical training and creative pedagogy, I craft engaging, intuitive ways for learners to connect with complex subjects.
            </p>

            {/* Highlighted Quote Callout */}
            <div className="relative my-4 rounded-xl bg-background border-l-4 border-zeton-red p-3.5 sm:p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <Quote size={20} className="text-zeton-red shrink-0 mt-0.5 opacity-80" />
                <p className="font-subheading italic text-sm md:text-base text-text-primary leading-snug">
                  "When you learn, make sure you learn in such a way that you're clear enough to explain it to anyone."
                </p>
              </div>
            </div>

            {/* Connecting paragraph */}
            <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
              Beyond my profession, I value genuine human connections. Whether it’s sharing a laugh, mentoring a student through doubt, or lending a helping hand, I strive to make those around me feel valued, confident, and inspired.
            </p>
          </div>

          {/* Quick Pillars/Values Badges */}
          <div className="mt-5 pt-4 border-t border-muted/50 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-subheading bg-background border border-muted text-text-secondary">
              <Laugh size={13} className="text-zeton-red" /> Humor & Engagement
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-subheading bg-background border border-muted text-text-secondary">
              <Sparkles size={13} className="text-zeton-blue dark:text-coral-tint" /> Creative Pedagogy
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-subheading bg-background border border-muted text-text-secondary">
              <Heart size={13} className="text-zeton-red" /> Empathy & Mentorship
            </span>
          </div>
        </div>

        {/* Right Column: What I Enjoy */}
        <div
          className={`lg:col-span-6 flex flex-col justify-between transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Header */}
          <div className="mb-3">
            <h2 className="text-2xl md:text-3xl font-heading text-primary relative inline-block pb-2">
              What I Enjoy
              <span
                className="absolute bottom-0 left-0 w-full h-1 bg-accent-gradient transition-transform duration-700 origin-left"
                style={{
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </h2>
          </div>

          {/* Hobby Cards Stack */}
          <div className="flex-1 flex flex-col justify-between gap-3">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl border border-muted bg-surface shadow-sm hover:border-zeton-blue hover:shadow-md transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className="relative shrink-0">
                  <img
                    src={hobby.imgSrc}
                    alt={hobby.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border-2 border-zeton-blue group-hover:border-zeton-red transition-colors duration-300 shadow-sm"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-heading text-base sm:text-lg text-primary truncate">
                      {hobby.title}
                    </h3>
                    <span className="hidden sm:inline-block text-[11px] font-subheading-alt px-2.5 py-0.5 rounded-full bg-background border border-muted text-text-secondary shrink-0">
                      {hobby.badge}
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
