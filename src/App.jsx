import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ArticlePage from "./pages/ArticlePage";
import AllNewsPages from "./pages/AllNewsPages";
import "./index.css";
import "./App.css";
import Footer from "./components/footer";
import Subscribe from "./components/Subscribe";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
