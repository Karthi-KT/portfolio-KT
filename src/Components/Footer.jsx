import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-surface text-light-text-primary dark:text-dark-text-primary py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-accent-purple" />
              <span className="font-body text-sm">+91-8220202457</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-accent-purple" />
              <span className="font-body text-sm break-all">
                mathtrainerkarthik@gmail.com
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/karthikeyan-thiyagarajan-895461219/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-purple transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Karthi-KT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-purple transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/_utthama_villain_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-purple transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
