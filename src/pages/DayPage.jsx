import HeadlineCard from "../components/HeadlineCard";

export default function DayPage({ date, headlines }) {
  if (!headlines || headlines.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <h2 className="text-xl font-semibold">No news for {date}</h2>
        <p>Come back later!</p>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        🗓️ News for {date}
      </h2>
      <div className="space-y-4">
        {headlines.map((item) => (
          <HeadlineCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
