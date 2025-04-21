import { motion, MotionValue, useAnimation } from "framer-motion";
import { Typography } from "@mui/material";

import styles from "./styles.module.scss";
import { useEffect } from "react";

interface HeroTextProps {
  preloaderFinished: boolean;
  motionValue: MotionValue<number>;
  text: string;
}

const heroTextContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroText = ({ preloaderFinished, motionValue, text }: HeroTextProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (preloaderFinished) {
      controls.start("show");
    }
  }, [preloaderFinished, controls]);

  return (
    <motion.div
      className={styles.heroTextContainer}
      style={{ y: motionValue }}
      animate={controls}
      variants={heroTextContainer}
      initial="hidden"
    >
      {text.split(" ").map((alph, index) => (
        <motion.span
          variants={letter}
          key={index}
          style={{
            marginRight: "0.8rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          <Typography variant="h1">{alph === " " ? "\u00A0" : alph}</Typography>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HeroText;
