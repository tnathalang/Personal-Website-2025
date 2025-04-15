import { motion } from "framer-motion";

import useMousePosition from "../utils/hooks/useMousePosition";
import classes from "./styles.module.scss";

interface CursorProps {
  cursorVariant: string;
}

const cursorVariants = {
  default: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    scale: 0,
  },
  footer: {
    scale: 1,
    backgroundColor: "white",
  },
};

const Cursor = ({ cursorVariant }: CursorProps) => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className={classes.cursor}
      animate={cursorVariant}
      variants={cursorVariants}
      style={{
        left: x - 10,
        top: y - 10,
      }}
    />
  );
};

export default Cursor;
