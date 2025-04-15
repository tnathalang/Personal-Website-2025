import HeroWrapper from "./HeroSection/HeroWrapper";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";
import ToolsCard from "./ToolsSection/ToolsCard";

import classes from "../main.module.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface InnerPageContentProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const ParallaxSection = ({
  children,
  yRange = ["0px", "-30px"],
}: {
  children: React.ReactNode;
  yRange: [string, string];
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // The parallax effect, slowing down the movement
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const padding = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]); // Add some padding as you scroll

  return (
    <motion.div
      ref={ref}
      style={{ y, paddingTop: padding, position: "sticky", top: 0 }}
    >
      {children}
    </motion.div>
  );
};

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
            <ParallaxSection yRange={["0px", "-200px"]}>
              <IntroSection
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
              />
            </ParallaxSection>
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
