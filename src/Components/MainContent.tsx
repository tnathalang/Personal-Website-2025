import { motion } from "framer-motion";
import { useState } from "react";

import useMousePosition from "./utils/hooks/useMousePosition";
import Header from "./Header";
import HeroWrapper from "./HeroSection/HeroWrapper";
import Description from "./DescriptionSection/Description";

import classes from "../main.module.scss";

const cursorVariants = {
  default: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    backgroundColor: "transparent",
  },
};

const MainContent = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const { x, y } = useMousePosition();

  const handleMouseEnter = () => {
    setCursorVariant("hover");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  return (
    <div className={classes.appContainer}>
      <motion.div
        className={classes.cursor}
        animate={cursorVariant}
        variants={cursorVariants}
        style={{
          left: x - 10,
          top: y - 10,
        }}
      />

      <Header />
      <HeroWrapper
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      />
      <Description
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
};

export default MainContent;
