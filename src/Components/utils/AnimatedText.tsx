import { Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { getWordRevealAnimation } from "./animation";

import classes from "./styles.module.scss";

interface AnimatedTextProps {
  text: string;
  isInView?: boolean;
  variant?: "subheder" | "default";
}

const AnimatedText = ({
  isInView = true,
  text,
  variant = "default",
}: AnimatedTextProps) => {
  const words = text.split(" ");
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("open");
    } else {
      controls.start("initial");
    }
  }, [isInView]);

  return (
    <div>
      {words.map((word, index) => (
        <span className={classes.animateTextContainer} key={index}>
          <Typography
            component={motion.span}
            custom={index}
            initial={{ transform: "translateY(100%)", opacity: 0 }}
            variant={variant === "default" ? "body1" : "h3"}
            animate={getWordRevealAnimation(index, isInView)}
            className={classes.text}
          >
            {word + " "}
          </Typography>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
