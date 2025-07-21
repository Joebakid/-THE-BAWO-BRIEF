// src/data/AllNewsPage.jsx
import { headlines as day4 } from "./2025-07-21";
import { headlines as day3 } from "./2025-07-18";
import { headlines as day1 } from "./2025-07-17";
import { headlines as day2 } from "./2025-07-16";

const allNews = [
  { date: "2025-07-21", headlines: day4 },
  { date: "2025-07-18", headlines: day3 },
  { date: "2025-07-17", headlines: day1 },
  { date: "2025-07-16", headlines: day2 },
].sort((a, b) => (a.date < b.date ? 1 : -1));

export default allNews;
