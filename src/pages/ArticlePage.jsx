import { useParams, Link } from "react-router-dom";
import AllNewsPage from "../data/AllNewsPage";

export default function ArticlePage() {
  const { id } = useParams();

  const article = AllNewsPage.flatMap((day) =>
    day.headlines.map((item) => ({ ...item, date: day.date }))
  ).find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8 font-sans">
        <div className="max-w-xl w-full mx-auto bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-red-600">
            Article not found
          </h1>
          <Link to="/" className="text-blue-600 underline mt-4 inline-block">
            ← Go back to all news
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen   px-4 py-8 font-sans   ">
      {/* max-w-2xl w-full mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md  bg-gray-100 */}
      <div className="   max-w-2xl w-full mx-auto   p-6 sm:p-8 rounded-xl shadow-md ">
        <div className="mb-4">
          <Link to="/" className="text-blue-500 text-sm sm:text-base   card">
            ← Back to all news
          </Link>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {article.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-4">
          Posted on {article.date}
        </p>
        <p className="text-gray-800 text-base sm:text-lg mb-6 whitespace-pre-line">
          {article.insight}
        </p>
        <a
          href={article.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View original article
        </a>
      </div>
    </div>
  );
}
