import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import AnimatedText from "../utils/AnimatedText";
import HoverFlipText from "../utils/HoverFlipText";
import MaskTextWrapper from "../utils/MaskTextWrapper";

import classes from "./styles.module.scss";
import { MouseActions } from "../HeroSection/types";

interface ToolsCardprops extends MouseActions {
  preloaderFinished: boolean;
}

const labels = ["React", "Typescript", "Ruby on rails", "GraphQL", "Apollo"];

const ToolsCard = ({
  preloaderFinished,
  onMouseEnter,
  onMouseLeave,
}: ToolsCardprops) => {
  const toolsCard = useRef(null);
  const isInView = useInView(toolsCard, { amount: 0.5, once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={toolsCard}
      className={classes.toolsSection}
      onMouseEnter={() => onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classes.body}>
        <div className={classes.leftSection}>
          <AnimatedText
            preloaderFinished={preloaderFinished}
            variant="subheder"
            text="What I’m usually building with"
            isInView={isInView}
          />
        </div>
      </div>
      <div className={classes.rightSection}>
        {labels.map((label, index) => {
          return (
            <div
              className={classes.title}
              key={index}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(!hovered)}
            >
              <div className={classes.wrapper}>
                <MaskTextWrapper
                  isInView={isInView}
                  preloaderFinished={preloaderFinished}
                >
                  <HoverFlipText label={label} />
                </MaskTextWrapper>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ToolsCard;
