import { Routes, Route, Navigate } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import AllNewsPages from "./pages/AllNewsPages";
import "./index.css";
import "./App.css";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <div className="container-wrapper ">
        <h2 className="font-bold text-center text-2xl text-blue-600 my-10">
          THE BAWO BRIEF
        </h2>
        <Routes>
          <Route path="/" element={<AllNewsPages />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
