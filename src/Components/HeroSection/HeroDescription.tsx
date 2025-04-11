import { Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import HeroButton from "./HeroButton";
import { Box } from "../Shared";
import { useRef } from "react";

interface HeroDescriptionProps {}

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

const HeroDescription = (props: HeroDescriptionProps) => {
  const container = useRef(null);
  const isInView = useInView(container);

  return (
    <Box
      ref={container}
      display="grid"
      gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} // 1 column on mobile, 2 equal columns on desktop, fr is fraction
      gap={2}
      paddingX={{ xs: 2, sm: 4, md: 6 }} // extra small 2, small 4, medium 6
      paddingY={{ xs: 4, sm: 6 }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridColumn={{ xs: "1", sm: "1" }}
      >
        <HeroButton />
      </Box>

      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginRight={5}
        marginLeft={5}
        gridColumn={{ xs: "1", sm: "2" }}
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
              variant="h5"
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
