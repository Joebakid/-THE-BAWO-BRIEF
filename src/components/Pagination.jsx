// src/components/Pagination.jsx
export default function Pagination({ page, total, setPage }) {
  const totalPages = total; // total days = total pages
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-6">
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
