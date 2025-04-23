import { motion, MotionValue, useAnimation } from "framer-motion";
import { Typography } from "@mui/material";

import styles from "./styles.module.scss";
import { useEffect } from "react";
import AnimatedText from "../utils/AnimatedText";

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
      <AnimatedText
        text={text}
        preloaderFinished={preloaderFinished}
        variant="h1"
      />
    </motion.div>
  );
};

export default HeroText;
