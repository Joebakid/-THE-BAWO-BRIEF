// src/components/Subscribe.jsx
export default function Subscribe() {
  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow">
      <h2 className="mb-4 text-xl font-bold text-center">
        📬 Subscribe to The Bawo Brief
      </h2>
      <a
        href="https://josephbawo.substack.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 text-center text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Go to Subscribe Page
      </a>
    </div>
  );
}
