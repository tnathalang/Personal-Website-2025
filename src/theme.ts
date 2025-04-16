import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f1e6",
    },
    secondary: {
      main: "#a8d08d",
    },
    text: {
      primary: "#1c1c1c",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif", // default fallback
    h1: {
      fontFamily: "'Roslindale Deck Narrow', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "8rem", // 128px
      lineHeight: 1.1,
      letterSpacing: "-0.5px",
    },
    h2: {
      fontFamily: "'Roslindale Deck Narrow', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "4rem", // 64px
      lineHeight: 1.2,
      letterSpacing: "-0.25px",
    },
    h3: {
      fontFamily: "'Roslindale Deck Narrow', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "3rem", // 48px
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: "2rem", // 32px
      lineHeight: 1.35,
    },
    h5: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "1.75rem", // 28px
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "1.5rem", // 24px
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: "'Roslindale Text', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "1.25rem", // 20px
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 300,
      fontSize: "1rem", // 16px
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem", // 20px
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 300,
      fontSize: "0.875rem", // 14px
      lineHeight: 1.6,
    },
    button: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: "0.875rem", // 14px
      letterSpacing: "0.05em",
    },
  },
});

export default theme;
