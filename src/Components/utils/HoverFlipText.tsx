import { motion } from "framer-motion";
import { Typography, useTheme } from "@mui/material";

import classes from "./styles.module.scss";

interface HoverFlipTextprops {
  label: string;
}

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
      whileHover="hovered"
      variants={{
        initial: {},
        hovered: {},
      }}
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
