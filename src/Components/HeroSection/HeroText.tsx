import { motion } from "framer-motion";
import { Typography } from "@mui/material";

import { Box } from "../Shared";

import Portrait from "../../assets/Portrait.png";

interface HeroTextProps {
  text: string;
}

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
      zIndex={3}
      width="100%"
      display="flex"
      flexWrap="wrap"
      marginLeft={8}
      marginRight={8}
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
