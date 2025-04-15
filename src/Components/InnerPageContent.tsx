import HeroWrapper from "./HeroSection/HeroWrapper";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";
import ToolsCard from "./ToolsSection/ToolsCard";

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
    <div className={classes.beforeStickyFooter}>
      <div>
        <HeroWrapper />
        <div className={classes.cardContainer}>
          <div>
            <IntroSection
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            />
            <ToolsCard />
            <Description
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPageContent;
