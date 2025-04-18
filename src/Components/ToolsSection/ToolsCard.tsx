import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import AnimatedText from "../utils/AnimatedText";
import HoverFlipText from "../utils/HoverFlipText";
import MaskTextWrapper from "../utils/MaskTextWrapper";

import classes from "./styles.module.scss";
import { MouseActions } from "../HeroSection/types";

interface ToolsCardprops extends MouseActions {}

const labels = ["React", "Typescript", "Ruby on rails", "GraphQL", "Apollo"];

const ToolsCard = ({ onMouseEnter, onMouseLeave }: ToolsCardprops) => {
  const toolsCard = useRef(null);
  const isInView = useInView(toolsCard, { amount: 0.5 });
  const [hovered, setHovered] = useState(false);

  // const { scrollYProgress } = useScroll({
  //   target: toolsCard,
  //   offset: ["start end", "end start"],
  // });

  // const rotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);

  return (
    <motion.div
      ref={toolsCard}
      className={classes.toolsSection}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classes.body}>
        <div className={classes.leftSection}>
          <AnimatedText
            variant="subheder"
            text="What I’m usually building with"
            isInView={isInView}
          />
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
                  <MaskTextWrapper isInView={isInView}>
                    <HoverFlipText label={label} />
                  </MaskTextWrapper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ToolsCard;
