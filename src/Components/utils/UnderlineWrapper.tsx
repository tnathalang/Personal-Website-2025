import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

import classes from "./styles.module.scss";

interface UnderlineWrapperProps {
  children: ReactNode;
}

const UnderlineWrapper = ({ children }: UnderlineWrapperProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {children}
      <motion.div
        className={classes.underline}
        animate={isHovered ? "hover" : "initial"}
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default UnderlineWrapper;
