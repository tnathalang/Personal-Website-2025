import { motion } from "framer-motion";
import { Typography, useTheme } from "@mui/material";

import classes from "./styles.module.scss";

interface HoverFlipTextprops {
  label: string;
}

const hoverFlipContainerVariants = {
  initial: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  enter: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.6,
    },
  },
};

const HoverFlipText = ({ label }: HoverFlipTextprops) => {
  const theme = useTheme();

  return (
    <motion.div
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
      }}
      initial="initial"
      animate="enter"
      whileHover="hovered"
      variants={hoverFlipContainerVariants}
    >
      <motion.div
        variants={{
          initial: { y: "0%" },
          hovered: { y: "-100%", opacity: 0 },
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <Typography className={classes.text}>{label}</Typography>
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          color: theme.palette.secondary.main,
        }}
        variants={{
          initial: { y: "100%" },
          hovered: { y: "0%" },
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Typography className={classes.text}>{label}</Typography>
      </motion.div>
    </motion.div>
  );
};

export default HoverFlipText;
