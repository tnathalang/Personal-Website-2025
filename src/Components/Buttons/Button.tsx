import { Box, styled } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
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

const StyledFillerPill = styled(motion.div)(() => ({
  width: "120%",
  height: "50%",
  position: "absolute",
  borderRadius: "50%",
  left: "-123%",
  backgroundColor: "#A8D08D",
  zIndex: 0,
}));

const Button = ({ children }: ButtonProps) => {
  const [scope, animate] = useAnimate();

  const manageMouseEnter = () => {
    animate(
      scope.current,
      { left: "-20%", width: "160%", height: "200%" },
      { duration: 0.4 }
    );
  };

  const manageMouseLeave = () => {
    animate(
      scope.current,
      { left: "100%", width: "125%" },
      { duration: 0.25 }
    ).then(() => {
      // Resets position to keep uniform look when the animation restarts from left to right
      animate(
        scope.current,
        { left: "-163%", width: "120%", height: "50%" },
        { duration: 0 }
      );
    });
  };

  return (
    <Box
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      sx={buttonStyle}
    >
      <StyledFillerPill ref={scope} />
      {children}
    </Box>
  );
};

export default Button;
