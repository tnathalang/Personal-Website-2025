import { useRef, useState } from "react";
import { useInView } from "framer-motion";

import AnimatedText from "../utils/AnimatedText";
import HoverFlipText from "../utils/HoverFlipText";
import MaskTextWrapper from "../utils/MaskTextWrapper";

import classes from "./styles.module.scss";
import { MouseActions } from "../HeroSection/types";

interface ToolsCardprops extends MouseActions {}

const labels = ["React", "Typescript", "Ruby on rails", "GraphQL", "Apollo"];

const ToolsCard = ({ onMouseEnter, onMouseLeave }: ToolsCardprops) => {
  const description = useRef(null);
  const isInView = useInView(description, { amount: 0.5 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={classes.toolsSection}
      ref={description}
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
    </div>
  );
};

export default ToolsCard;
