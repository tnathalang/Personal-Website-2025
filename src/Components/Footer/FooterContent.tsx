import { Typography } from "@mui/material";
import classes from "./styles.module.scss";

export const Content = () => {
  return (
    <div className={classes.section2}>
      <div className={classes.section2Headings}>
        <Typography variant="h1">You've reached the end.</Typography>
        <Typography variant="h1">Or maybe the beginning?</Typography>
      </div>
      <Typography variant="body2">
        © {new Date().getFullYear()} — Designed & Developed by Akira
      </Typography>
    </div>
  );
};
