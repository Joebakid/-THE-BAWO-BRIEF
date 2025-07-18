// src/components/Subscribe.jsx
export default function Subscribe() {
  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow">
      <h2 className="mb-4 text-xl font-bold text-center">
        📬 Subscribe to The Bawo Brief
      </h2>
      <form
        action="https://josephbawo.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40thebawobrief&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true"
        method="post"
        target="_blank"
        className="flex flex-col gap-3"
      >
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
