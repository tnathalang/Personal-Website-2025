import { ReactNode, useEffect, useRef } from "react";
import { Box } from "../Shared";
import { styled, Typography } from "@mui/material";
import { gsapTimeLine } from "./animation";
import classes from "./styles.module.scss";

interface AnimatedButtonProps {
  icon?: ReactNode;
  label?: string;
  iconStart?: boolean;
  onClick?: () => void;
}

const StyledFillerPill = styled("div")(() => ({
  width: "120%",
  height: "150%",
  position: "absolute",
  borderRadius: "50%",
  left: "-120%",
  backgroundColor: "#A8D08D",
}));

const AnimatedButton = ({
  icon,
  iconStart,
  label,
  onClick,
}: AnimatedButtonProps) => {
  const circle = useRef(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: number | null | undefined = null;

  useEffect(() => {
    const letters = textRef.current!.querySelectorAll("span");
    const circleEl = circle.current!;
    timeline.current = gsapTimeLine(circleEl, letters);
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Box
      className={classes.button}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      onClick={onClick}
    >
      <StyledFillerPill ref={circle} />
      {iconStart && icon}
      <Box marginLeft={iconStart ? 2 : 0} marginRight={iconStart ? 0 : 2}>
        <Typography ref={textRef}>
          {label?.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </Typography>
      </Box>
      {!iconStart && icon}
    </Box>
  );
};

export default AnimatedButton;
