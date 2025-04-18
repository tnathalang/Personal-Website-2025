import { Typography } from "@mui/material";
import classes from "./styles.module.scss";

export const FooterContent = () => {
  return (
    <>
      <div className={classes.footerEnd}>
        <div className={classes.footerEndTextWrapper}>
          <Typography variant="h1">You've reached the end.</Typography>
          <Typography variant="h1">Or maybe the beginning?</Typography>
        </div>
      </div>
      <div>
        <div className={classes.contact}>
          <Typography variant="h2">Got a project in mind?</Typography>
          <Typography
            className={classes.contactLink}
            variant="h2"
            component={"a"}
            href="mailto:atnathalang@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            atnathalang@gmail.com
          </Typography>
        </div>
        <Typography variant="body2" className={classes.copyrights}>
          © {new Date().getFullYear()} — Designed & Developed by Akira Na
          Thalang
        </Typography>
      </div>
    </>
  );
};
