import { Typography, TypographyVariant, useTheme } from "@mui/material";
import { motion, useCycle } from "framer-motion";
import React, { useEffect } from "react";

import classes from "./styles.module.scss";
import useTypewriter from "./hooks/useTypewriter";

interface TypewriterTextProps {
  accented?: boolean;
  pauseTime?: number;
  typingSpeed?: "normal" | "fast";
  variant?: TypographyVariant;
  words: string[];
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  accented = false,
  pauseTime = 1500,
  typingSpeed = "normal",
  variant = "body1",
  words,
}) => {
  const theme = useTheme();
  const [showCursor, cycleCursor] = useCycle(true, false);
  const text = useTypewriter({ words, pauseTime, typingSpeed });

  // Cursor blinking logic
  useEffect(() => {
    const interval = setInterval(() => {
      cycleCursor();
    }, 500);
    return () => clearInterval(interval);
  }, [cycleCursor]);

  return (
    <Typography
      component={"span"}
      variant={variant}
      color={
        accented ? theme.palette.secondary.main : theme.palette.primary.main
      }
      style={{ display: "inline", whiteSpace: "normal" }}
    >
      {text}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={classes.typeCursor}
      />
    </Typography>
  );
};

export default TypewriterText;
