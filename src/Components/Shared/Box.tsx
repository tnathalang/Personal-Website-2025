import { Box as MUIBox, BoxProps as MUIBoxProps } from "@mui/material";
import { MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface BoxProps
  extends MUIBoxProps,
    Omit<
      MotionProps,
      "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "style"
    > {
  children?: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <MUIBox {...props}>{children}</MUIBox>;
};

export default Box;
