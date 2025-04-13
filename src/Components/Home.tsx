import Lenis from "lenis";
import { useEffect } from "react";
import MainContent from "./MainContent";
import Footer from "./Footer/Footer";
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
      <Footer />
    </main>
  );
};

export default Home;
