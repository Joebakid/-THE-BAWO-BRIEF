import { useState } from "react";
import NewsPage from "./DayPage"; // Each day’s full news layout
import allNews from "../data/AllNewsPage";
import Pagination from "../components/Pagination";

export default function AllNewsPages() {
  const [page, setPage] = useState(0);

  // Only show one day's news per page
  const total = allNews.length;
  const currentDayNews = allNews[page];

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
