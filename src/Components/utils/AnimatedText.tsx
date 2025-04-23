import { Typography } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

import classes from "./styles.module.scss";
import MaskTextWrapper from "./MaskTextWrapper";

interface AnimatedTextProps {
  text: string;
  preloaderFinished: boolean;
  isInView?: boolean;
  variant?: "h3" | "body1" | "h1";
}

const AnimatedText = ({
  isInView = true,
  preloaderFinished,
  text,
  variant = "body1",
}: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <div>
      {words.map((word, index) => (
        <span className={classes.animateTextContainer} key={index}>
          <MaskTextWrapper
            isInView={isInView}
            preloaderFinished={preloaderFinished}
          >
            <Typography variant={variant} className={classes.text}>
              {word + " "}
            </Typography>
          </MaskTextWrapper>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
