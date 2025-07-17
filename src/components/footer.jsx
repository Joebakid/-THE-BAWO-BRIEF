export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12 transition-custom">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} Joseph Bawo. All rights reserved.
        </p>

        <div className="flex   flex-wrap items-center gap-2 mt-2 text-sm md:flex-row md:justify-center md:gap-4">
          <a href="mailto:josephbawo@gmail.com" className="text-blue-600 card">
            josephbawo@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-bawo-82569022a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 card"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/josephbawo2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 card"
          >
            X
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
