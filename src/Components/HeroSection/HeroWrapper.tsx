import { motion } from "framer-motion";

import { Box } from "../Shared";

import HeroText from "./HeroText";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HeroWrapper = () => {
  return (
    <Box height="65vh">
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        position="relative"
        zIndex={2}
        flexWrap="wrap"
        component={motion.div}
        initial="hidden"
        animate="show"
        variants={container}
      >
        <HeroText text={"Hello - I'm Akira"} />
      </Box>
    </Box>
  );
};

export default HeroWrapper;
