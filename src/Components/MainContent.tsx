import { useRef, useState } from "react";
import { useScroll } from "framer-motion";

import Footer from "./Footer/Footer";

import { Header } from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";
import ScrollPinSectionWrapper from "./utils/ScrollPinSectionWrapper";

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
    <>
      <Header />
      <div style={{ marginBottom: "-50vh", zIndex: 1 }}>
        <div style={{ position: "sticky", top: 0 }}>
          <HeroSection />
        </div>
        <div style={{ height: "50vh" }} />
      </div>

      <ScrollPinSectionWrapper>
        <IntroSection
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("secondary")}
        />
      </ScrollPinSectionWrapper>

      <ScrollPinSectionWrapper>
        <ToolsCard />
      </ScrollPinSectionWrapper>

      <div>
        <Description
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("secondary")}
        />
        <Footer
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("secondary")}
        />
      </div>
    </>
  );
};

export default MainContent;
