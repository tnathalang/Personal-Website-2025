import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";

import theme from "./theme";
import Home from "./Components/Home";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showInnerPage, setShowInnerPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <AnimatePresence onExitComplete={() => setShowInnerPage(true)}>
        {showPreloader && <Preloader />}
      </AnimatePresence> */}

      {showInnerPage && <Home />}
    </ThemeProvider>
  );
}

export default App;
