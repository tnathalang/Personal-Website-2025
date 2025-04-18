import Lenis from "lenis";
import { useEffect } from "react";
import MainContent from "./MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about-me" element={<h1>hello</h1>} />
      </Routes>
    </Router>
  );
};

export default Home;
