import Portrait from "../assets/Portrait.png";
import { styled, Typography } from "@mui/material";
import { Box } from "./Shared";
import { motion } from "framer-motion";
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
      justifyContent="flex-start"
      height="100vh"
      overflow="hidden"
    >
      <Box
        paddingLeft={8}
        zIndex={2}
        component={motion.div}
        initial="hidden"
        animate="show"
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
        top={-75}
        position="relative"
        justifyContent="center"
        alignItems="center"
        display="flex"
        width="100%"
        style={{ maxHeight: "70%", overflow: "hidden" }} // Limit image height to avoid overflow
      >
        <motion.img
          src={Portrait}
          variants={imageVariant}
          initial="hidden"
          animate="show"
          style={{
            width: "auto",
            maxWidth: "80%",
            height: "auto",
            maxHeight: "100%",
          }}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap-reverse"
        position="relative"
        marginX={2}
      >
        <Box display="flex" ml="auto" marginTop={2} marginBottom={2}>
          <Button>
            <DownIcon />
            <Box marginLeft={2}>
              <Typography>Scroll for more</Typography>
            </Box>
          </Button>
        </Box>

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
    </Box>
  );
};

export default HeroBanner;
