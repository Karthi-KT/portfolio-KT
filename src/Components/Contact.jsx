import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Message from ${name} (${number})`);
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:mathtrainerkarthik@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row justify-center items-center bg-surface shadow-lg rounded-lg w-full max-w-4xl overflow-hidden">
          {/* Contact Info Section */}
          <div className="flex flex-col text-cool-white p-8 md:p-10 space-y-6 w-full md:w-1/2">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading mb-8">
                Contact Information
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-body text-lg">+91-8220202457</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-body text-lg break-all">
                  mathtrainerkarthik@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-8">
              <a
                href="https://www.linkedin.com/in/karthikeyan-thiyagarajan-895461219/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral-tint transition-colors duration-300"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://github.com/Karthi-KT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral-tint transition-colors duration-300"
              >
                <FaGithub size={32} />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex flex-col w-full md:w-1/2 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-heading mb-6 text-text-primary">
              Send a Message
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-secondary mb-1 font-subheading"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  className="w-full p-3 bg-background border-2 border-border rounded-md text-text-primary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block text-text-secondary mb-1 font-subheading"
                >
                  Phone Number
                </label>
                <input
                  id="number"
                  className="w-full p-3 bg-background border-2 border-border rounded-md text-text-primary"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-text-secondary mb-1 font-subheading"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 h-32 bg-background border-2 border-border rounded-md text-text-primary"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-zeton-red hover:bg-coral-tint text-white font-subheading py-3 px-4 rounded-md transition-colors duration-300 mt-2"
                onClick={handleSendEmail}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;