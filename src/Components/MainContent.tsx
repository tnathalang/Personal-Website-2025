import { useRef, useState } from "react";
import { useScroll } from "framer-motion";

import Footer from "./Footer/Footer";
import Cursor from "./Cursor/Cursor";

import classes from "../main.module.scss";
import InnerPageContent from "./InnerPageContent";

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
      <InnerPageContent
        handleMouseEnter={handleMouseEnter("hover")}
        handleMouseLeave={handleMouseLeave}
      />
      <Footer
        scrollProgress={scrollYProgress}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter("footer")}
      />
    </div>
  );
};

export default MainContent;
