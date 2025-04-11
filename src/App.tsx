import { ThemeProvider } from "@mui/material";
import Header from "./Components/Header";

import MainLayout from "./Components/MainLayout";
import theme from "./theme";
import Preloader from "./Components/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HeroTest from "./Components/HeroSection/HeroTest";
import HeroWrapper from "./Components/HeroSection/HeroWrapper";
import classes from "./main.module.scss";
import useMousePosition from "./utils/useMousePosition";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showInnerPage, setShowInnerPage] = useState(true);
  const [cursorVariant, setCursorVariant] = useState("default");

  const { x, y } = useMousePosition();

  const cursorVariants = {
    default: {
      default: {
        opacity: 1,
        scale: 1,
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <AnimatePresence onExitComplete={() => setShowInnerPage(true)}>
        {showPreloader && <Preloader />}
      </AnimatePresence> */}

      {showInnerPage && (
        <div className={classes.appContainer}>
          <motion.div
            className={classes.cursor}
            animate={cursorVariant}
            variants={cursorVariants}
            style={{
              left: x - 10, // center horizontally
              top: y - 10, // center vertically
              position: "fixed",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          />

          <Header />
          <HeroWrapper />
          {/* <MainLayout /> */}
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
