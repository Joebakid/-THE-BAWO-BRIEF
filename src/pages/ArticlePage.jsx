import { useParams, Link } from "react-router-dom";
import AllNewsPage from "../data/AllNewsPage";
import { useEffect } from "react";
import HeadlineCard from "../components/HeadlineCard";

export default function ArticlePage() {
  const { id } = useParams();

  const allArticles = AllNewsPage.flatMap((day) =>
    day.headlines.map((item) => ({ ...item, date: day.date }))
  );

  const article = allArticles.find((item) => item.id === id);

  // Get last two days’ articles (excluding the current one)
  const lastTwoDaysHeadlines = AllNewsPage.slice(-2).flatMap((day) =>
    day.headlines
      .filter((item) => item.id !== id)
      .map((item) => ({ ...item, date: day.date }))
  );

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
    <div className="min-h-screen px-4 py-8 font-sans">
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

      {/* Section for last 2 days headlines */}
      <div className="max-w-2xl mx-auto mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Headlines
        </h2>
        {lastTwoDaysHeadlines.map((item) => (
          <HeadlineCard
            key={item.id}
            id={item.id}
            title={item.title}
            summary={item.summary}
          />
        ))}
      </div>
    </div>
  );
}
