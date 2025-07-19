import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import NewsPage from "./DayPage"; // Each day’s full news layout
import allNews from "../data/AllNewsPage";
import Pagination from "../components/Pagination";

export default function AllNewsPages() {
  const location = useLocation();
  const [page, setPage] = useState(0);

  // Extract search term from query param
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // Search logic: Flatten all headlines from all days and filter
 const searchResults = useMemo(() => {
  if (!searchTerm) return [];

  return allNews
    .flatMap((day) =>
      (day.headlines || []).map((item) => ({
        ...item,
        date: day.date,
      }))
    )
    .filter((headline) => {
      const title = headline.title?.toLowerCase() || "";
      const content = headline.content?.toLowerCase() || "";
      return title.includes(searchTerm) || content.includes(searchTerm);
    });
}, [searchTerm]);


  // Default: show paginated days
  const total = allNews.length;
  const currentDayNews = allNews[page];

  if (searchTerm) {
    return (
      <div className="px-4">
        <h2 className="text-xl mb-4">
          Search results for: <strong>{searchTerm}</strong>
        </h2>

        {searchResults.length === 0 ? (
          <p className="text-red-500">No matching articles found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {searchResults.map((article, idx) => (
              <div key={idx} className="border p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500 mb-1">{article.date}</p>
                <h3 className="text-lg font-semibold">{article.title}</h3>
               <p className="text-sm text-gray-700 mb-2">
  {article.content ? article.content.slice(0, 120) + "..." : "No content available."}
</p>

                <a
                  href={`/article/${article.id}`}
                  className="text-blue-600 text-sm font-medium"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // If not searching, show paginated news
  if (!currentDayNews)
    return <p className="mt-10 text-center">No news found.</p>;

  return (
    <div>
      <NewsPage
        date={currentDayNews.date}
        headlines={currentDayNews.headlines}
      />

      <Pagination page={page} total={total} setPage={setPage} />
    </div>
  );
}
