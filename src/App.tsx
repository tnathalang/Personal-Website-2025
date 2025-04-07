import { ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";

import MainLayout from "./Components/MainLayout";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroBanner />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
