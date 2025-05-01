import { Typography } from "@mui/material";
import { useRef, useState } from "react";

import classes from "./style.module.scss";
import AnimatedButton from "../Buttons/AnimatedButton";
import WorkDetail from "./WorkDetail";

interface WorkSectionProps {}

const workData = [
  {
    title: "Full-stack developer",
    company: "Potloc",
    description:
      "Delivering end-to-end features, collaborating on UI/UX, maintaining the design system and Storybook, writing tests, and fostering teamwork through code reviews, brainstorming, and pair programming.",
    stacks: ["React", "Ruby on Rails", "GraphQL", "Apollo"],
    detailed: "",
  },
];

const responsibilities = [
  "Takes on a feature, breaks it down into stories, and delivers them from start to finish",
  "Writes clean and efficient code (React, TypeScript, Ruby on Rails, GraphQL)",
  "Participates in code review sessions with teammates and cross-team collaborators",
  "Works closely with designers to improve UI/UX and bring tasks to life",
  "Contributes to the internal design system",
  "Updates and implements Storybook for new or updated components",
  "Writes tests in RSpec: system tests for UI and unit tests for methods",
  "Engages in feature planning discussions, daily standups, and scrum routines",
  "Helps organize team and company-wide events and gatherings",
  "Promotes transparency and teamwork through support and pair programming",
];
const WorkSection = (_props: WorkSectionProps) => {
  const workSection = useRef(null);

  return (
    <>
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
    </>
  );
};

export default WorkSection;
