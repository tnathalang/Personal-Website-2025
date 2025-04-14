import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@mui/material";

import classes from "./styles.module.scss";
import { useEffect, useState } from "react";

interface AutoFlipTextprops {
  labels: string[];
}

const AutoFlipText = ({ labels }: AutoFlipTextprops) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % labels.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [labels]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={labels[index]}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        style={{
          display: "inline-block",
          position: "relative",
          color: "#a8d08d",
        }}
      >
        <Typography className={classes.text}>{labels[index]}</Typography>
      </motion.div>
    </AnimatePresence>
  );
};

export default AutoFlipText;
