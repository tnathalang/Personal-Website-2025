import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";

import theme from "./theme";
import Home from "./Components/Home";
import Preloader from "./Components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderFinished, serPreloaderFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);

      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => serPreloaderFinished(true)}
      >
        {showPreloader && <Preloader />}
      </AnimatePresence>
      <Home preloaderFinished={preloaderFinished} />
    </ThemeProvider>
  );
}

export default App;
