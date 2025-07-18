import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // or
import { SiGmail } from "react-icons/si"; // Gmail brand icon
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-6 mt-12 text-gray-700 bg-gray-100 transition-custom">
      <div className="max-w-4xl px-4 mx-auto space-y-2 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Joseph Bawo. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-2 text-sm md:flex-row md:justify-center md:gap-4">
          <a href="mailto:josephbawo@gmail.com" className="text-blue-600 card">
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-bawo-82569022a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 card"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/josephbawo2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 card"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.josephbawo.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 card"
          >
            Made with ❤️ By Joseph bawo
          </a>
        </div>
      </div>
    </footer>
  );
}
