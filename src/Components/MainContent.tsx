import { motion } from "framer-motion";
import { useRef, useState } from "react";

import useMousePosition from "./utils/hooks/useMousePosition";
import HeroWrapper from "./HeroSection/HeroWrapper";
import Description from "./DescriptionSection/Description";
import Footer from "./Footer/Footer";
import IntroSection from "./IntroSection/IntroSection";

import classes from "../main.module.scss";
import ToolsCard from "./ToolsSection/ToolsCard";

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

const MainContent = () => {
  const introSectionRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { x, y } = useMousePosition();

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  const handleMouseEnter = (variant: string) => () => setCursorVariant(variant);

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
      <HeroWrapper />
      <div className={classes.cardContainer}>
        <IntroSection
          ref={introSectionRef}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("hover")}
        />
      </div>

      <ToolsCard />

      <div className={classes.cardContainer}>
        <Description
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("hover")}
        />
      </div>
      <Footer
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter("footer")}
      />
    </div>
  );
};

export default MainContent;
