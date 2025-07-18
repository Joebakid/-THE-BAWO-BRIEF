import { Routes, Route, Navigate, Link } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import AllNewsPages from "./pages/AllNewsPages";
import "./index.css";
import "./App.css";
import Footer from "./components/footer";
import Subscribe from "./components/Subscribe";

export default function App() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="my-10 text-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 ">
            THE BAWO BRIEF
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<AllNewsPages />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
