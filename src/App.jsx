import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Career from "./Components/Career";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import LMSShowcasePage from "./Components/LMS";
import { setTheme, selectCurrentTheme } from "./redux/slices/themeSlice";
import { FaArrowUp } from "react-icons/fa";

import "./index.css";
import Footer from "./Components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectCurrentTheme);

  useEffect(() => {
    if (theme) {
      dispatch(setTheme(theme));
    }
  }, [theme, dispatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section id="home" className="mb-16">
          <Home />
        </section>

        <section id="about" className="mb-16">
          <About />
        </section>

        <section id="skills" className="mb-16">
          <Skills />
        </section>

        <section id="career" className="mb-16">
          <Career />
        </section>

        <section id="projects" className="mb-16">
          <LMSShowcasePage />
        </section>

        <section id="contact" className="mb-16">
          <Footer />
        </section>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-zeton-blue hover:bg-slate-blue px-6 py-3 rounded-md transition-colors duration-300 text-cool-white font-subheading flex items-center gap-2"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-lg" />
        <span className="text-cool-white">Top</span>
      </button>
    </div>
  );
};

export default App;
