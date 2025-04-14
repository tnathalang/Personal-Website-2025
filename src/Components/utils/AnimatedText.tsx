import { Typography } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

import classes from "./styles.module.scss";
import MaskTextWrapper from "./MaskTextWrapper";

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
          <MaskTextWrapper isInView={isInView}>
            <Typography
              variant={variant === "default" ? "body1" : "h3"}
              className={classes.text}
            >
              {word + " "}
            </Typography>
          </MaskTextWrapper>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
