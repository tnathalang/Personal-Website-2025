import { MotionValue, useTransform } from "framer-motion";
import { Typography } from "@mui/material";

import classes from "./styles.module.scss";

interface FooterProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Footer = ({ onMouseEnter, onMouseLeave }: FooterProps) => {
  return (
    <div
      style={{
        position: "relative",
        height: "800px",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "calc(100vh + 800px)",
          top: "-100vh",
        }}
      >
        <div
          style={{
            height: "800px",
            position: "sticky",
            top: "calc(100vh - 800px)",
          }}
        >
          <div
            style={{
              // backgroundColor: theme.palette.secondary.main,
              paddingTop: "2rem",
              paddingBottom: "2rem",
              paddingLeft: "3rem",
              paddingRight: "3rem",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h1">Section 1</Typography>
            <Typography variant="h1">This is a footer</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
