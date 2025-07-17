import { useParams, Link } from "react-router-dom";
import AllNewsPage from "../data/AllNewsPage";
import { useEffect } from "react";

export default function ArticlePage() {
  const { id } = useParams();

  const article = AllNewsPage.flatMap((day) =>
    day.headlines.map((item) => ({ ...item, date: day.date }))
  ).find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen px-4 py-8 font-sans bg-gray-50">
        <div className="w-full max-w-xl p-6 mx-auto bg-white shadow-md rounded-xl">
          <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">
            Article not found
          </h1>
          <Link
            to="/"
            className="text-sm text-blue-500 rounded-md sm:text-base card"
          >
            ← Back to all news
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 font-sans ">
      {/* max-w-2xl w-full mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md  bg-gray-100 */}
      <div className="w-full max-w-2xl p-6 mx-auto shadow-md sm:p-8 rounded-xl">
        <div className="inline-flex mb-4">
          <Link
            to="/"
            className="text-sm text-blue-500 rounded-md sm:text-base card"
          >
            ← Back to all news
          </Link>
        </div>
        <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          {article.title}
        </h1>
        <p className="mb-4 text-sm text-gray-500 sm:text-base">
          Posted on {article.date}
        </p>
        <p className="mb-6 text-base text-gray-800 whitespace-pre-line sm:text-lg">
          {article.insight}
        </p>
        <a
          href={article.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
        >
          View original article
        </a>
      </div>
    </div>
  );
}
