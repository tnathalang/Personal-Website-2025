import { MotionValue, useTransform } from "framer-motion";
import { Typography } from "@mui/material";

import classes from "./styles.module.scss";
import { FooterContent } from "./FooterContent";

interface FooterProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Footer = ({ onMouseEnter, onMouseLeave }: FooterProps) => {
  return (
    <div
      className={classes.footerContainer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classes.footerScrollContainer}>
        <div className={classes.stickyContentContainer}>
          <div className={classes.footerContent}>
            <FooterContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
