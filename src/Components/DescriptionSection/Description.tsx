import { Typography, styled } from "@mui/material";
import { useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

import classes from "./styles.module.scss";
import AnimatedButton from "../Buttons/AnimatedButton";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import AnimatedText from "../utils/AnimatedText";

interface DescriptionProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const label =
  "I'm a front-end engineer who cares about the details. I build responsive, accessible web experiences with React, TypeScript, and GraphQL, and bring a full-stack perspective from my time working with Ruby on Rails. I love crafting clean UI, writing thoughtful, and collaborating with teams to turn ideas into polished products.";

const ArrowUpIcon = styled(ArrowUpRightIcon)(() => ({
  width: "16px",
  height: "16px",
}));

const Description = ({ onMouseEnter, onMouseLeave }: DescriptionProps) => {
  const description = useRef(null);
  const isInView = useInView(description, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={description} className={classes.description}>
      <AnimatedText text="About me" isInView={isInView} variant="subheder" />
      <div className={classes.body}>
        <div className={classes.left}>
          <AnimatedText text={label} isInView={isInView} />
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ width: "fit-content" }}
          >
            <AnimatedButton label="More about me" icon={<ArrowUpIcon />} />
          </div>
        </div>
        <div className={classes.right}>
          <Typography variant="subtitle2">
            Always learning, always refining — because good code is never
            finished.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Description;
