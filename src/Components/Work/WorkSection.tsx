import { Typography } from "@mui/material";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import classes from "./style.module.scss";

interface WorkSectionProps {}

const workData = [
  {
    title: "Full-Stack developer",
    company: "Potloc",
    description:
      "Delivering end-to-end features, collaborating on UI/UX, maintaining the design system and Storybook, writing tests, and fostering teamwork through code reviews, brainstorming, and pair programming.",
    stacks: ["React", "Ruby on Rails", "GraphQL", "Apollo"],
    detailed: "",
  },
];

const WorkSection = ({ onMouseEnter, onMouseLeave }: WorkSectionProps) => {
  const workSection = useRef(null);
  const isInView = useInView(workSection, { amount: 0.5 });

  return (
    <div className={classes.workSectionContainer}>
      <Typography variant="h3">Most recent position</Typography>
      <div ref={workSection} className={classes.parent}>
        {workData.map((work, index) => (
          <>
            <Typography
              variant="h4"
              className={classes.company}
              fontSize="10rem"
              alignItems="center"
              display="flex"
              justifyContent="center"
            >
              {work.company}
            </Typography>
            <Typography
              variant="h4"
              className={classes.title}
              fontSize="3rem"
              alignItems="center"
              display="flex"
              justifyContent="center"
            >
              {work.title}
            </Typography>
            <Typography
              variant="body1"
              className={classes.description}
              alignItems="flex-start"
              display="flex"
              justifyContent="left"
              padding="40px"
              fontSize="2rem"
            >
              {work.description}
            </Typography>
            <div className={classes.stacks}>
              <div className={classes.parentStacks}>
                {work.stacks.map((stack, index) => (
                  <Typography fontSize="2rem">{stack}</Typography>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
