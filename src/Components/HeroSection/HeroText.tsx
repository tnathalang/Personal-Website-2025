import { motion } from "framer-motion";
import { Typography } from "@mui/material";

import { Box } from "../Shared";

import styles from "./styles.module.scss";

interface HeroTextProps {
  text: string;
}

const heroTextContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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

const HeroText = ({ text }: HeroTextProps) => {
  return (
    <Box
      className={styles.heroText}
      animate="show"
      component={motion.div}
      display="flex"
      flexWrap="wrap"
      initial="hidden"
      marginLeft={8}
      marginRight={8}
      variants={heroTextContainer}
      width="100%"
      zIndex={3}
    >
      {text.split(" ").map((alph, index) => (
        <Typography
          variant="h1"
          component={motion.span}
          variants={letter}
          key={index}
          style={{
            marginRight: "0.8rem",
            position: "relative",
          }}
        >
          {alph === " " ? "\u00A0" : alph}
        </Typography>
      ))}
    </Box>
  );
};

export default HeroText;
