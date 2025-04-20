import { useRef } from "react";

import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";
import ScrollPinSectionWrapper from "./utils/ScrollPinSectionWrapper";

import classes from "../main.module.scss";
import { MouseActions } from "./HeroSection/types";

interface MainContentProps extends MouseActions {}

const MainContent = ({ onMouseEnter, onMouseLeave }: MainContentProps) => {
  const mainContentRef = useRef(null);

  return (
    <>
      <div ref={mainContentRef}>
        <div style={{ marginBottom: "-50vh", zIndex: 1 }}>
          <div style={{ position: "sticky", top: 0 }}>
            <HeroSection />
          </div>
          <div style={{ height: "50vh" }} />
        </div>

        <ScrollPinSectionWrapper>
          <IntroSection
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter("menu")}
          />
        </ScrollPinSectionWrapper>

        <ScrollPinSectionWrapper>
          <ToolsCard
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter("secondary")}
          />
        </ScrollPinSectionWrapper>

        <div className={classes.endSection}>
          <Description
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter("menu")}
          />
          <Footer
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter("secondary")}
          />
        </div>
      </div>
    </>
  );
};

export default MainContent;
