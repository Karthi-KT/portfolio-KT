import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row items-center justify-center"
        style={{ minHeight: "calc(100vh - 64px)" }} // Using the navbar height variable
      >
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 p-6">
          <h1 className="text-5xl md:text-5xl font-heading text-primary pb-2 text-center">
            I'm Karthikeyan.T
          </h1>
          <h6 className="text-1.5xl md:text-2xl font-subheading text-secondary text-center">
            and I'm a
          </h6>
          <div className="text-2.5xl md:text-3xl font-subheading-alt text-zeton-red text-center">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "React Developer",
                  "JavaScript Developer",
                  "Technical Trainer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          {/* <div className="mt-8 flex space-x-4">
            <Link
              to="/projects"
              className="bg-zeton-blue hover:bg-slate-blue px-6 py-3 rounded-md transition-colors duration-300 text-cool-white font-subheading"
            >
              View My Work
            </Link>

            <a
              href="#contact"
              className="bg-zeton-red hover:bg-coral-tint px-6 py-3 rounded-md transition-colors duration-300 text-cool-white font-subheading"
            >
              Contact Me
            </a>
          </div> */}
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-gradient rounded-full blur-md opacity-20 transform scale-110"></div>
            <img
              src={`${import.meta.env.BASE_URL}KT-DP.jpg`}
              alt="Karthikeyan T"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-zeton-blue shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
