import { MotionValue, useTransform } from "framer-motion";

import classes from "./styles.module.scss";
import { Typography } from "@mui/material";

interface FooterProps {
  scrollProgress: MotionValue<number>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Footer = ({
  scrollProgress,
  onMouseEnter,
  onMouseLeave,
}: FooterProps) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);

  return (
    <div
      className={classes.footerContainer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classes.footerContent}>
        <div className={classes.footer}>
          <div className={classes.footerSections}>
            <div>
              <Typography>Section 1</Typography>
            </div>
            <div className={classes.section2}>
              <Typography variant="h1">You've reached the end.</Typography>
              <Typography variant="h1">Or maybe the beginning?</Typography>
              <div className={classes.copyrights}>
                <Typography variant="body2">
                  © {new Date().getFullYear()} — Designed & Developed by Akira
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
