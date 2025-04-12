import Lenis from "lenis";
import { useEffect } from "react";
import MainContent from "./MainContent";
import Footer from "./Footer/Footer";

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
      <MainContent />
      <Footer />
    </main>
  );
};

export default Home;
