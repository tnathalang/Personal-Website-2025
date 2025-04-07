import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Kinta, serif",
      fontSize: "8rem",
    },
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "2rem",
    },
  },
});

export default theme;
