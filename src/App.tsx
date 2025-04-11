import { ThemeProvider } from "@mui/material";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";

import MainLayout from "./Components/MainLayout";
import theme from "./theme";
import Preloader from "./Components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Box } from "./Components/Shared";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showInnerPage, setShowInnerPage] = useState(true);

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
        <Box display="flex" flexDirection="column">
          <Header />
          <HeroBanner />
          {/* <MainLayout /> */}
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
