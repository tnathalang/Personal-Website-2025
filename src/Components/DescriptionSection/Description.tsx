import { Typography, styled } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import classes from "./styles.module.scss";
import AnimatedButton from "../Buttons/AnimatedButton";

import AnimatedText from "../utils/AnimatedText";
import TypewriterText from "../utils/TypewriterText";
import useTypewriter from "../utils/hooks/useTypewriter";

interface DescriptionProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const label =
  "I'm a front-end developer who cares about the details. I build responsive, accessible web experiences with React, TypeScript, and GraphQL—and I’m comfortable diving into the back end too, especially with Ruby on Rails. I love crafting clean UI, writing thoughtful code, and collaborating with teams to turn ideas into polished products.";

const punchLines = [
  "good code is never finished.",
  "the best solutions evolve over time.",
  "each line can be better than the last.",
  "every challenge is an opportunity to improve.",
];

const ArrowUpIcon = styled(ArrowUpRightIcon)(() => ({
  width: "16px",
  height: "16px",
}));

const Description = ({ onMouseEnter, onMouseLeave }: DescriptionProps) => {
  const description = useRef(null);
  const isInView = useInView(description, { amount: 0.5 });

  return (
    <div className={classes.description} ref={description}>
      <AnimatedText text="About me" isInView={isInView} variant="subheder" />
      <div className={classes.body}>
        <div className={classes.leftSection}>
          <AnimatedText text={label} isInView={isInView} />
          <div
            className={classes.button}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <AnimatedButton label="More about me" icon={<ArrowUpIcon />} />
          </div>
        </div>
        <div className={classes.rightSection}>
          <Typography>Always learning, always refining —</Typography>
          <Typography className={classes.flip}>
            because&nbsp;
            <TypewriterText accented words={punchLines} typingSpeed="fast" />
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Description;
