import Lenis from "lenis";
import { useEffect } from "react";
import MainContent from "./MainContent";
import { BrowserRouter as Router } from "react-router-dom";

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
      <MainContent />
    </Router>
  );
};

export default Home;
