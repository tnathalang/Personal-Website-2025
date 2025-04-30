import { styled, Typography } from "@mui/material";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import classes from "./styles.module.scss";

interface AboutMeProps {}

const AboutMe = (_props: AboutMeProps) => {
  const AboutMe = useRef(null);
  const isInView = useInView(AboutMe, { amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: AboutMe,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

  return (
    <div ref={AboutMe} className={classes.aboutMeContainer}>
      <div className={classes.intro}>
        <Typography variant="h3">A little more about me</Typography>
        <Typography>
          Hi there, I’m a front-end developer with a love for clean code,
          thoughtful design, and the little things in life—like a well-poured
          matcha latte or that perfect shade of stone gray. With a background
          rooted in both Canadian and Thai cultures, I bring a global
          perspective to my work and life, always striving for balance,
          simplicity, and meaning. By day, I turn creative ideas into smooth,
          interactive web experiences—one line of React code, one sip of coffee,
          and one cat cuddle at a time. I’ve built a career on crafting
          intuitive user interfaces and thoughtful interactions, always
          exploring how to make the web feel just a bit more human.
        </Typography>
      </div>
      <div className={classes.personal}>
        <Typography variant="h3">Outside of Work</Typography>
        <Typography>
          I keep things active but slow-paced. I hit the gym regularly, enjoy
          long walks with a coffee in hand, and unwind by spending time with
          close friends—usually over spicy food, new beers, or a solid board
          game night. I live with my British Shorthair cat, Birky, who may or
          may not be the real center of my universe (spoiler: he is). I’ve also
          got a few tattoos—each one a story from a chapter in my life. If
          you’re curious, I’m always happy to share. I enjoy this quieter rhythm
          outside of work—it’s a good contrast to the energy I bring to my
          day-to-day projects.
        </Typography>
      </div>
      <div className={classes.intro}>
        <Typography variant="h3">Achievements</Typography>
        <Typography>
          At Potloc, I delivered several key features that quickly became team
          favorites—practical, polished, and thoughtfully built. I also played
          an active role in the company's rebranding initiative, collaborating
          closely with the design team. That experience sparked a deeper
          appreciation for design thinking and really ignited the more creative
          side of my front-end work.
        </Typography>
      </div>
    </div>
  );
};

export default AboutMe;
