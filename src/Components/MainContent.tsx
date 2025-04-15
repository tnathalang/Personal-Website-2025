import { useRef, useState } from "react";
import { useScroll } from "framer-motion";

import HeroWrapper from "./HeroSection/HeroWrapper";
import Description from "./DescriptionSection/Description";
import Footer from "./Footer/Footer";
import IntroSection from "./IntroSection/IntroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import Cursor from "./Cursor/Cursor";

import classes from "../main.module.scss";

const MainContent = () => {
  const mainContentRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll({
    target: mainContentRef,
    offset: ["start end", "end end"],
  });

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };
  const handleMouseEnter = (variant: string) => () => setCursorVariant(variant);

  return (
    <div className={classes.appContainer} ref={mainContentRef}>
      <Cursor cursorVariant={cursorVariant} />
      <div className={classes.beforeStickyFooter}>
        <div>
          <HeroWrapper />
          <div className={classes.cardContainer}>
            <IntroSection
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter("hover")}
            />
          </div>
          <div className={classes.cardContainer}>
            <ToolsCard />
          </div>
          <Description
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter("hover")}
          />
        </div>
      </div>
      <Footer
        scrollProgress={scrollYProgress}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter("footer")}
      />
    </div>
  );
};

export default MainContent;
