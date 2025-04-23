import { Typography } from "@mui/material";
import { useRef, useState } from "react";

import classes from "./style.module.scss";
import AnimatedButton from "../Buttons/AnimatedButton";
import WorkDetailModal from "./WorkDetailModal";

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

const WorkSection = (_props: WorkSectionProps) => {
  const workSection = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <WorkDetailModal open={open} onClose={() => setOpen(false)} />

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
                <AnimatedButton
                  label="More details"
                  onClick={() => setOpen(true)}
                />
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
    </>
  );
};

export default WorkSection;
