import { motion, MotionValue } from "framer-motion";
import { Typography } from "@mui/material";

import styles from "./styles.module.scss";

interface HeroTextProps {
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
      delayChildren: 2,
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

const HeroText = ({ motionValue, text }: HeroTextProps) => {
  return (
    <motion.div
      className={styles.heroTextContainer}
      style={{ y: motionValue }}
      animate="show"
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
