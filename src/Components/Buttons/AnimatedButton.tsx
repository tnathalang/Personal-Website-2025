import { ReactNode, useEffect, useRef } from "react";
import { Box } from "../Shared";
import { styled } from "@mui/material";
import gsap from "gsap";
import MagneticWrapper from "../MagneticWrapper/MagneticWrapper";

interface AnimatedButtonProps {
  children?: ReactNode;
}

const buttonStyle = {
  borderRadius: "3em",
  border: "1px solid",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 60px 10px 60px",
  overflow: "hidden",
  "& svg": {
    position: "relative",
    zIndex: 1,
    transition: "color 0.2s linear",
    color: "black",
  },
  "& p": {
    position: "relative",
    zIndex: 1,
    transition: "color 0.2s linear",
  },
  "&:hover p, &:hover svg": {
    color: "white",
  },
};

const StyledFillerPill = styled("div")(() => ({
  width: "120%",
  height: "150%",
  position: "absolute",
  borderRadius: "50%",
  left: "-120%",
  backgroundColor: "#A8D08D",
}));

const AnimatedButton = ({ children }: AnimatedButtonProps) => {
  const circle = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: number | null | undefined = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          left: "-10%",
          width: "120%",
          height: "300%",
          duration: 0.6,
          ease: "power1.out",
        },
        "enter"
      )
      .to(
        circle.current,
        { left: "100%", width: "125%", height: "300%", duration: 0.4 },
        "exit"
      );
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
      sx={buttonStyle}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
    >
      <StyledFillerPill ref={circle} />
      {children}
    </Box>
  );
};

export default AnimatedButton;
