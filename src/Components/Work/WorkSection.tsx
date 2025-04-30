import { Typography } from "@mui/material";
import { useRef, useState } from "react";

import classes from "./style.module.scss";
import AnimatedButton from "../Buttons/AnimatedButton";
import WorkDetail from "./WorkDetail";
import { AnimatePresence, motion } from "framer-motion";

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

const bodyVariant = {
  initial: {
    opacity: 0,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.12 * i, // Delay for each item based on its index
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const WorkSection = (_props: WorkSectionProps) => {
  const workSection = useRef(null);
  const [moreDetails, setMoreDetails] = useState(false);

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

            <motion.div
              className={classes.description}
              layout
              initial={false}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <Typography
                  variant="body1"
                  sx={{
                    padding: "40px",
                    fontSize: "2rem",
                  }}
                >
                  {moreDetails ? (
                    <motion.ul
                      key="details"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 1,
                          ease: [0.76, 0, 0.24, 1],
                        },
                      }}
                      exit={{ opacity: 0 }}
                      layout
                      style={{ paddingLeft: "20px", margin: 0 }}
                    >
                      {responsibilities.map((responsibility, index) => (
                        <motion.li
                          key={index}
                          variants={bodyVariant}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          custom={index}
                        >
                          {responsibility}
                        </motion.li>
                      ))}
                    </motion.ul>
                  ) : (
                    <motion.div
                      layout
                      key="summary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
                      }}
                    >
                      {work.description}
                    </motion.div>
                  )}
                </Typography>
              </AnimatePresence>

              <div className={classes.moreDetails}>
                <AnimatedButton
                  label={moreDetails ? "Less details" : "More details"}
                  onClick={() => setMoreDetails(!moreDetails)}
                />
              </div>
            </motion.div>

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
