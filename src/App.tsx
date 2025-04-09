import { ThemeProvider } from "@mui/material";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";

import MainLayout from "./Components/MainLayout";
import theme from "./theme";
import Preloader from "./Components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showInnerPage, setShowInnerPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence onExitComplete={() => setShowInnerPage(true)}>
        {showPreloader && <Preloader />}
      </AnimatePresence>

      {showInnerPage && (
        <>
          <Header />
          <HeroBanner />
          <MainLayout />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
