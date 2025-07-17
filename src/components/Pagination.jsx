// src/components/Pagination.jsx
export default function Pagination({ page, total, setPage }) {
  const totalPages = Math.ceil(total / 5);
  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 justify-center mt-6">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-1 rounded ${
            i === page ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
