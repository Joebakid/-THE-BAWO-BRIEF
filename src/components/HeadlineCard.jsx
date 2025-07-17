import { Link } from "react-router-dom";

export default function HeadlineCard({ id, title, summary }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-700">{summary}</p>
      <Link
        to={`/article/${id}`}
        className="text-blue-600 card text-sm mt-2 inline-block rounded"
      >
        Read more →
      </Link>
    </div>
  );
}
