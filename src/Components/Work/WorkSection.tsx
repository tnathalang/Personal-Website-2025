import { Typography } from "@mui/material";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import classes from "./style.module.scss";
import AnimatedButton from "../Buttons/AnimatedButton";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

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
      {workData.map((work, index) => (
        <div ref={workSection} className={classes.parent} key={index}>
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
          <div className={classes.description}>
            <Typography
              variant="body1"
              sx={{
                padding: "40px",
                fontSize: "2rem",
              }}
            >
              {work.description}
            </Typography>
            <div className={classes.moreDetails}>
              <AnimatedButton label="More details" />
            </div>
          </div>

          <div className={classes.stacks}>
            <div className={classes.parentStacks}>
              {work.stacks.map((stack, index) => (
                <Typography key={index} fontSize="2rem">
                  {stack}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
