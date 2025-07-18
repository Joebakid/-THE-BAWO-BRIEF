// src/components/Subscribe.jsx
export default function Subscribe() {
  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow">
      <h2 className="mb-4 text-xl font-bold text-center">
        📬 Subscribe to The Bawo Brief
      </h2>
      <form
        action="https://thebawobrief.substack.com/subscribe"
        method="post"
        target="_blank"
        className="flex flex-col gap-3"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
