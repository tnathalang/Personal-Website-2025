import { useRef } from "react";

import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";

import classes from "../main.module.scss";
import { MouseActions } from "./HeroSection/types";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import WorkSection from "./Work/WorkSection";

interface MainContentProps extends MouseActions {
  preloaderFinished: boolean;
}

const MainContent = ({
  preloaderFinished,
  onMouseEnter,
  onMouseLeave,
}: MainContentProps) => {
  const mainContentRef = useRef(null);
  const introRef = useRef(null);
  const toolsRef = useRef(null);
  const descriptionRef = useRef(null);

  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });

  const introSectionMotionValue = useTransform(
    containerScrollYProgress,
    [0, 1],
    [0, -200]
  );

  const isInView = useInView(toolsRef, { amount: 0.2 });

  return (
    <>
      <div ref={mainContentRef}>
        <motion.div
          style={{ height: "100vh" }}
          initial={{ backgroundColor: "#F5F1E6" }}
          animate={{
            backgroundColor: isInView ? "#1c1c1c" : "#f5f1e6",
            color: isInView ? "#f5f1e6" : "#1c1c1c",
          }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection preloaderFinished={preloaderFinished} />
          <motion.div style={{ y: introSectionMotionValue }}>
            <IntroSection
              preloaderFinished={preloaderFinished}
              onMouseLeave={onMouseLeave}
              onMouseEnter={() => onMouseEnter("menu")}
            />
          </motion.div>
        </motion.div>

        <motion.div
          ref={toolsRef}
          animate={{
            backgroundColor: isInView ? "#1c1c1c" : "#f5f1e6",
            color: isInView ? "#f5f1e6" : "#1c1c1c",
          }}
          transition={{ duration: 0.5 }}
        >
          <ToolsCard
            preloaderFinished={preloaderFinished}
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter("secondary")}
          />
        </motion.div>

        <motion.div
          ref={toolsRef}
          animate={{
            backgroundColor: isInView ? "#1c1c1c" : "#f5f1e6",
            color: isInView ? "#f5f1e6" : "#1c1c1c",
          }}
          transition={{ duration: 0.5 }}
        >
          <WorkSection />
        </motion.div>

        <div ref={descriptionRef} className={classes.endSection}>
          <Description
            preloaderFinished={preloaderFinished}
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter("menu")}
          />
        </div>

        <Footer
          onMouseLeave={onMouseLeave}
          onMouseEnter={() => onMouseEnter("secondary")}
        />
      </div>
    </>
  );
};

export default MainContent;
