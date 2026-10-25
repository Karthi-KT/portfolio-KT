import { useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectThemeMode, toggleTheme } from "../redux/slices/themeSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode); // "light" or "dark"

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const isDark = themeMode === "dark";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-surface shadow-md">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenuOpen}
            className="text-xl md:hidden text-text-primary hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="relative group"
          >
            <h1 className="text-xl font-bold font-subheading-alt text-primary">
              <span className="group-hover:hidden">
                <span>&lt;</span> K T <span>/&gt;</span>
              </span>
              <span className="hidden group-hover:inline text-secondary">
                Karthikeyan Thiyagarajan
              </span>
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          <NavLink sectionId="career" onClick={() => scrollToSection("career")}>
            Career
          </NavLink>
          <NavLink sectionId="about" onClick={() => scrollToSection("about")}>
            About me
          </NavLink>
          <NavLink sectionId="skills" onClick={() => scrollToSection("skills")}>
            Skills
          </NavLink>
          <NavLink
            sectionId="projects"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </NavLink>
          <NavLink
            sectionId="contact"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </NavLink>
          <a
            href="https://drive.google.com/file/d/1zCWongAm8TV_8eL1eoGWRCowr_aMy6CN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded-md hover:bg-background transition-colors font-subheading text-text-primary hover:text-secondary"
          >
            Resume
          </a>
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-full bg-background hover:bg-slate-blue transition-colors"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <FaSun className="text-cool-white" />
          ) : (
            <FaMoon className="text-zeton-blue" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-muted overflow-y-auto max-h-[calc(100vh-var(--spacing-navbar-height))]">
          <nav className="container mx-auto flex flex-col">
            <MobileNavLink
              sectionId="career"
              onClick={() => scrollToSection("career")}
            >
              Career
            </MobileNavLink>
            <MobileNavLink
              sectionId="about"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </MobileNavLink>
            <MobileNavLink
              sectionId="skills"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </MobileNavLink>
            <MobileNavLink
              sectionId="projects"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              sectionId="contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </MobileNavLink>
            <a
              href="https://drive.google.com/file/d/1zCWongAm8TV_8eL1eoGWRCowr_aMy6CN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 hover:bg-background transition-colors text-text-primary hover:text-secondary font-subheading border-b border-muted"
              onClick={toggleMenuOpen}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

// Helper component for desktop navigation links
const NavLink = ({ sectionId, onClick, children }) => (
  <a
    href={`#${sectionId}`}
    className="py-2 px-4 rounded-md hover:bg-background transition-colors font-subheading text-text-primary hover:text-secondary"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </a>
);

// Helper component for mobile navigation links
const MobileNavLink = ({ sectionId, onClick, children }) => (
  <a
    href={`#${sectionId}`}
    className="py-3 px-4 hover:bg-background transition-colors text-text-primary hover:text-secondary font-subheading border-b border-muted"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </a>
);

export default Header;
