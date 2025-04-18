import { useRef, useState } from "react";

import Footer from "./Footer/Footer";
import { Header } from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";
import ScrollPinSectionWrapper from "./utils/ScrollPinSectionWrapper";
import Cursor from "./Cursor/Cursor";

import classes from "../main.module.scss";

const MainContent = () => {
  const mainContentRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };
  const handleMouseEnter = (variant: string) => () => setCursorVariant(variant);

  return (
    <div ref={mainContentRef}>
      <Cursor cursorVariant={cursorVariant} />
      <Header
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter("menu")}
      />
      <div style={{ marginBottom: "-50vh", zIndex: 1 }}>
        <div style={{ position: "sticky", top: 0 }}>
          <HeroSection />
        </div>
        <div style={{ height: "50vh" }} />
      </div>

      <ScrollPinSectionWrapper>
        <IntroSection
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("menu")}
        />
      </ScrollPinSectionWrapper>

      <ScrollPinSectionWrapper>
        <ToolsCard
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("secondary")}
        />
      </ScrollPinSectionWrapper>

      <div className={classes.endSection}>
        <Description
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("menu")}
        />
        <Footer
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("secondary")}
        />
      </div>
    </div>
  );
};

export default MainContent;
