import Lenis from "lenis";
import { useEffect, useState } from "react";
import MainContent from "./MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./Cursor/Cursor";
import { Header } from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";

const Home = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };
  const handleMouseEnter = (variant: string) => () => setCursorVariant(variant);

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
      <Cursor cursorVariant={cursorVariant} />
      <Header
        onMouseEnter={handleMouseEnter("menu")}
        onMouseLeave={handleMouseLeave}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              onMouseEnter={handleMouseEnter("secondary")}
              onMouseLeave={handleMouseLeave}
            />
          }
        />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default Home;
