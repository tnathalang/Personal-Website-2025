import { ThemeProvider } from "@mui/material";
import Header from "./Components/Header";

import MainLayout from "./Components/GradientBackground";
import theme from "./theme";
import Preloader from "./Components/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HeroWrapper from "./Components/HeroSection/HeroWrapper";
import classes from "./main.module.scss";
import useMousePosition from "./Components/utils/hooks/useMousePosition";
import GradientBackground from "./Components/GradientBackground";
import Description from "./Components/DescriptionSection/Description";

const cursorVariants = {
  default: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    backgroundColor: "transparent",
  },
};

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showInnerPage, setShowInnerPage] = useState(true);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { x, y } = useMousePosition();

  const handleMouseEnter = () => {
    setCursorVariant("hover");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 10);
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
              left: x - 10,
              top: y - 10,
            }}
          />

          <Header />
          <HeroWrapper
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          />
          <Description
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
