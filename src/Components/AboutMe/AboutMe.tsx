import { styled } from "@mui/material";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import classes from "./styles.module.scss";

interface AboutMeProps {}

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

const AboutMe = (_props: AboutMeProps) => {
  const AboutMe = useRef(null);
  const isInView = useInView(AboutMe, { amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: AboutMe,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

  return (
    <div ref={AboutMe}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
      tempore aspernatur. Quaerat neque vero enim placeat! Molestias, nesciunt
      dicta rem qui fugit odio explicabo ab doloribus ducimus, quas voluptas
      cumque?
    </div>
  );
};

export default AboutMe;
