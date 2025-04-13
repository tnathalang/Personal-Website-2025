import Lenis from "lenis";
import { useEffect } from "react";
import MainContent from "./MainContent";
import Header from "./Header";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // request animation frame
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Header />
      <MainContent />
    </main>
  );
};

export default Home;
