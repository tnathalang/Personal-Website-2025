import { Typography, TypographyVariant } from "@mui/material";
import { motion, useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";

import classes from "./styles.module.scss";

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
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, cycleCursor] = useCycle(true, false);
  const isNormalSpeed = typingSpeed === "normal";
  const deletingSpeed = isNormalSpeed ? 50 : 10;
  const speed = isNormalSpeed ? 100 : 40;

  // Typing/Deleting logic
  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText((prev) => currentWord.slice(0, prev.length + 1));
        } else {
          setText((prev) => prev.slice(0, -1));
        }
      },
      isDeleting ? deletingSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed]);

  // Word transition logic
  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [text, isDeleting, wordIndex, words, pauseTime]);

  // Cursor blinking cycle
  useEffect(() => {
    const interval = setInterval(() => {
      cycleCursor();
    }, 500);
    return () => clearInterval(interval);
  }, [cycleCursor]);

  return (
    <Typography
      variant={variant}
      color={accented ? "#a8d08d" : "#ebe9e4"}
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
