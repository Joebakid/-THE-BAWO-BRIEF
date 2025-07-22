import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticlePage from "./pages/ArticlePage";
import AllNewsPages from "./pages/AllNewsPages";
import "./index.css";
import "./App.css";
import Footer from "./components/footer";
import Subscribe from "./components/Subscribe";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptoData, setCryptoData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
        );
        const data = await res.json();
        setCryptoData(data);
      } catch (err) {
        console.error("Failed to fetch crypto prices:", err);
      }
    };

    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const TickerContent = () => (
    <div className="flex gap-6 px-4">
      {cryptoData.length === 0 ? (
        <span className="text-gray-400">Loading crypto prices...</span>
      ) : (
        cryptoData.map((coin) => (
          <span key={coin.id} className="flex items-center gap-1 min-w-max">
            <img src={coin.image} alt={coin.symbol} className="w-4 h-4" />
            {coin.name}: ${coin.current_price.toLocaleString()}{" "}
            <span
              className={
                coin.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </span>
        ))
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Crypto Prices Ticker */}
      <div className="bg-gray-900 text-white h-10 overflow-hidden relative">
        <div className="marquee-wrapper absolute top-0 left-0 w-full h-full">
          <div className="marquee-content whitespace-nowrap flex gap-10 animate-marquee">
            <TickerContent />
            <TickerContent />
          </div>
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="flex-grow">
        <div className="container-wrapper">
          <div className="my-10 text-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 block mb-4">
              THE BAWO BRIEF
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex justify-center">
              <input
                type="text"
                placeholder="Search articles..."
                className="border border-gray-300 px-4 py-2 rounded-l-lg w-64 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
              >
                Search
              </button>
            </form>
          </div>

          <Routes>
            <Route path="/" element={<AllNewsPages />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Subscribe />
        </div>
      </div>

      <Footer />
    </div>
  );
}
