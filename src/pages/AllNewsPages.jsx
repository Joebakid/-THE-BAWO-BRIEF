import NewsPage from "./DayPage";
import allNews from "../data/AllNewsPage";

export default function AllNewsPages() {
  return (
    <>
      {allNews
        .filter((day) => day.headlines && day.headlines.length > 0)
        .map((day) => (
          <NewsPage key={day.date} date={day.date} headlines={day.headlines} />
        ))}
    </>
  );
}
