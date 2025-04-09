import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Kinta, serif",
      fontSize: "8rem",
    },
    h3: {
      fontFamily: "Kinta, serif",
      fontSize: "4rem",
    },
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "2rem",
    },
    body1: {
      fontFamily: "Roboto Light, sans-serif",
      fontWeight: 300,
      fontSize: "1rem",
    },
  },
});

export default theme;
