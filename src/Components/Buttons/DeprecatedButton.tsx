import { Box, styled } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

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

const DeprecatedButton = ({ children }: ButtonProps) => {
  const [scope, animate] = useAnimate();
  const isHovering = useRef(false);

  const manageMouseEnter = async () => {
    isHovering.current = true;
    // Force reset to left origin instantly before enter animation
    await animate(
      scope.current,
      { left: "-163%", width: "120%", height: "50%" },
      { duration: 0 }
    );
    // Then animate in from the left
    animate(
      scope.current,
      { left: "-20%", width: "160%", height: "150%" },
      { duration: 0.4 }
    );
  };

  const manageMouseLeave = () => {
    isHovering.current = false;
    animate(
      scope.current,
      { left: "100%", width: "125%" },
      { duration: 0.25 }
    ).then(() => {
      // Only reset if we’re STILL not hovering
      if (!isHovering.current) {
        animate(
          scope.current,
          { left: "-163%", width: "120%", height: "50%" },
          { duration: 0 }
        );
      }
    });
  };

  const manageMouseOver = () => {
    isHovering.current = true;
    if (isHovering.current) {
      animate(
        scope.current,
        { left: "-2%", width: "135%", height: "250%" },
        { duration: 0.4 }
      );
    }
  };

  return (
    <Box
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      onMouseOver={manageMouseOver}
      sx={buttonStyle}
    >
      <StyledFillerPill ref={scope} />
      {children}
    </Box>
  );
};

export default DeprecatedButton;
