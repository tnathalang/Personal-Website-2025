import { useRef } from "react";
import { useInView } from "framer-motion";

import AnimatedText from "../utils/AnimatedText";
import HoverFlipText from "../utils/HoverFlipText";
import MaskTextWrapper from "../utils/MaskTextWrapper";

import classes from "./styles.module.scss";

interface ToolsCardprops {}

const labels = ["React", "Typescript", "Ruby on rails", "GraphQL", "Apollo"];

const ToolsCard = (_props: ToolsCardprops) => {
  const description = useRef(null);
  const isInView = useInView(description, { amount: 0.5 });

  return (
    <div className={classes.toolsSection} ref={description}>
      <div className={classes.body}>
        <div className={classes.leftSection}>
          <AnimatedText
            variant="subheder"
            text="What I’m usually building with"
            isInView={isInView}
          />
        </div>

        <div className={classes.titles}>
          {labels.map((label, index) => {
            return (
              <div className={classes.title} key={index}>
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
