import { Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import HeroButton from "./HeroButton";
import { Box } from "../Shared";
import { useRef } from "react";

const phrase =
  "Turning ideas into interactive web experiences—one line of React code, one sip of coffee, and one cat cuddle at a time. Crafting front-end magic with passion and precision building intuitive, user-centered designs";
const words = phrase.split(" ");

const containerVariants = {
  initial: {},
  open: {
    transition: {
      staggerChildren: 0.05, // delay between words
    },
  },
};

const wordVariants = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0,
  },
  open: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 20, // Start 20px below the normal position
  },
  open: {
    opacity: 1,
    y: 0, // Move to the normal position
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

const HeroDescription = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  return (
    <Box
      display="grid"
      gap={2}
      gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} // 1 column on mobile, 2 equal columns on desktop, fr is fraction
      paddingX={{ xs: 2, sm: 4, md: 6 }} // extra small 2, small 4, medium 6
      paddingY={{ xs: 4, sm: 6 }}
      ref={container}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridColumn={{ xs: "1", sm: "1" }}
        gridRow={{ xs: "2", sm: "1" }} // button goes below text on mobile
        viewport={{ once: true }}
      >
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate={isInView ? "open" : "initial"}
        >
          <HeroButton />
        </motion.div>
      </Box>

      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginRight={5}
        marginLeft={5}
        gridColumn={{ xs: "1", sm: "2" }}
        gridRow={{ xs: "1", sm: "1" }} // text first on all views
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "open" : "initial"}
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
            gap: "0.25rem",
          }}
        >
          {words.map((word, index) => (
            <Typography
              variant="body1"
              component={motion.span}
              key={index}
              variants={wordVariants}
              style={{
                display: "inline-block",
                whiteSpace: "pre",
              }}
            >
              {word + " "}
            </Typography>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroDescription;
