import { Box } from "../Shared";
import AnimatedButton from "../Buttons/AnimatedButton";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { styled, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HeroFooterProps {}

const phrases = [
  "Turning ideas into interactive web experiences—one line of React code,",
  "one sip of coffee, and one cat cuddle at a time.",
  "Crafting front-end magic with passion and precision",
  "building intuitive, user-centered designs.",
];

const DownIcon = styled(ChevronDownIcon)(() => ({
  width: "16px",
  height: "16px",
}));

const heroFooterTextVariants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const HeroFooter = (props: HeroFooterProps) => {
  const body = useRef(null);

  const isInView = useInView(body, { once: true });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap-reverse"
      position="relative"
      marginX={2}
    >
      <Box display="flex" ml="auto" marginTop={2} marginBottom={2}>
        <AnimatedButton>
          <DownIcon />
          <Box marginLeft={2}>
            <Typography>Scroll for more</Typography>
          </Box>
        </AnimatedButton>
      </Box>

      {/* <Box ref={body}>
        {phrases.map((phrase, index) => {
          return (
            <div key={index}>
              <Typography
                component={motion.p}
                custom={index}
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : ""}
                style={{
                  overflow: "hidden",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "end",
                }}
              >
                {phrase}
              </Typography>
            </div>
          );
        })}
      </Box> */}
      <Typography
        variant="body1"
        component={motion.p}
        initial="hidden"
        animate="show"
        variants={heroFooterTextVariants}
        style={{
          overflow: "hidden",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "end",
        }}
      >
        Turning ideas into interactive web experiences—one line of React code,
        <br />
        one sip of coffee, and one cat cuddle at a time.
        <br />
        Crafting front-end magic with passion and precision,
        <br />
        building intuitive, user-centered designs.
      </Typography>
    </Box>
  );
};

export default HeroFooter;
