import { useRef } from "react";

import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";
import ScrollPinSectionWrapper from "./utils/ScrollPinSectionWrapper";

import classes from "../main.module.scss";
import { MouseActions } from "./HeroSection/types";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface MainContentProps extends MouseActions {}

const MainContent = ({ onMouseEnter, onMouseLeave }: MainContentProps) => {
  const mainContentRef = useRef(null);
  const introRef = useRef(null);
  const toolsRef = useRef(null);

  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });

  const introSectionMotionValue = useTransform(
    containerScrollYProgress,
    [0, 1],
    [0, -200]
  );

  const isInView = useInView(toolsRef);

  return (
    <>
      <div ref={mainContentRef}>
        <div style={{ height: "100vh", backgroundColor: "#f5f1e6" }}>
          <HeroSection />
          <motion.div style={{ y: introSectionMotionValue }}>
            <IntroSection
              onMouseLeave={onMouseLeave}
              onMouseEnter={() => onMouseEnter("menu")}
            />
          </motion.div>
        </div>

        <div>
          <motion.div
            ref={toolsRef}
            initial={{ backgroundColor: "#F5F1E6" }}
            animate={{
              backgroundColor: isInView ? "#1c1c1c" : "#f5f1e6",
              color: isInView ? "#f5f1e6" : "#1c1c1c",
            }}
            transition={{ duration: 1 }}
          >
            <ToolsCard
              onMouseLeave={onMouseLeave}
              onMouseEnter={() => onMouseEnter("secondary")}
            />
          </motion.div>
        </div>

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
