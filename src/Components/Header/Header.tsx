import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import classes from "./styles.module.scss";
import AnimatedText from "../utils/AnimatedText";
import MenuButton from "./MenuButton";
import { Typography } from "@mui/material";
import MenuContent from "./MenuContent";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: 0,
    right: 0,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "100px",
    height: "40px",
    top: 0,
    right: 0,
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const textVariants = {
  initial: { x: 0, opacity: 1 },
  slideOut: { x: "-100%", opacity: 0, transition: { duration: 0.6 } },
};

const devVariants = {
  initial: { x: "100%", opacity: 0 },
  slideIn: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } },
};

const SlidingTitle = ({ isSwapped }: { isSwapped: boolean }) => {
  return (
    <Typography
      component="h1"
      variant="h4"
      sx={{
        position: "relative",
        height: "40px", // Set height to accommodate one line of text
        width: "fit-content",
        overflow: "hidden",
      }}
    >
      <motion.span
        variants={{
          initial: { x: 0, opacity: 1 },
          slideOut: { x: "-100%", opacity: 0, transition: { duration: 0.6 } },
        }}
        initial="initial"
        animate={isSwapped ? "slideOut" : "initial"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        Akira Na Thalang
      </motion.span>

      <motion.span
        variants={{
          initial: { x: "100%", opacity: 0 },
          slideIn: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        initial="initial"
        animate={isSwapped ? "slideIn" : "initial"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        Developer
      </motion.span>
    </Typography>
  );
};

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [onHover, setOnHover] = useState(false);

  return (
    <div className={classes.header}>
      <Typography>Akira Na Thalang - Developer</Typography>
      <div className={classes.menuWrapper}>
        <MenuButton
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
        <motion.div
          className={classes.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <MenuContent />}</AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
