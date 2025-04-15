import HeroWrapper from "./HeroSection/HeroWrapper";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import { ParallaxSection } from "./utils/ParallaxWrapper";

import classes from "../main.module.scss";

interface InnerPageContentProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const InnerPageContent = ({
  handleMouseEnter,
  handleMouseLeave,
}: InnerPageContentProps) => {
  return (
    <div className={classes.innerPageContainer}>
      <div>
        <HeroWrapper />
        <div className={classes.cardContainer}>
          <div>
            <ParallaxSection yRange={["0px", "-200px"]}>
              <IntroSection
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
              />
            </ParallaxSection>
            <ParallaxSection yRange={["0px", "-50px"]}>
              <ToolsCard />
            </ParallaxSection>
            <div style={{ position: "relative", marginTop: "-80px" }}>
              <Description
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPageContent;
