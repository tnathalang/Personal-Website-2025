import Portrait from "../assets/Portrait.png";
import { styled, Typography } from "@mui/material";
import { Box } from "./Shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./Buttons/Button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const heroText = "Hey - I'm Akira";

const DownIcon = styled(ChevronDownIcon)(() => ({
  width: "16px",
  height: "16px",
}));

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const imageVariant = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

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

const HeroBanner = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100vh"
    >
      <Box
        paddingLeft={10}
        zIndex={2}
        component={motion.div}
        initial="hidden"
        animate="show"
        style={{ display: "flex", flexWrap: "wrap" }}
        variants={container}
      >
        {heroText.split(" ").map((alph, index) => (
          <Typography
            variant="h1"
            component={motion.span}
            variants={letter}
            key={index}
            style={{ marginRight: "0.8rem" }}
          >
            {alph === " " ? "\u00A0" : alph}
          </Typography>
        ))}
      </Box>

      <Box
        zIndex={-1}
        top={-83}
        position="relative"
        justifyContent="center"
        display="flex"
      >
        <motion.img
          src={Portrait}
          variants={imageVariant}
          initial="hidden"
          animate="show"
          style={{ width: "50%", height: "auto" }}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="end"
        marginX={10}
        position="relative"
        top={-50}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width="80%"
          alignItems="center"
        >
          <Button>
            <DownIcon />
            <Box marginLeft={2}>
              <Typography>Scroll for more</Typography>
            </Box>
          </Button>

          <Typography
            variant="h4"
            component={motion.p}
            initial="hidden"
            animate="show"
            variants={heroFooterTextVariants}
            style={{ overflow: "hidden" }}
          >
            Full-stack developer
            <br />
            with focus on the front-end in React.js
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
