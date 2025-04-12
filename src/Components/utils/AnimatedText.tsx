import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Box } from "../Shared";

interface AnimatedTextProps {
  text: string;
  isInView?: boolean;
  variant?: "subheder" | "default";
}

const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  initial: {},
  open: {
    transition: {
      staggerChildren: 0.015,
    },
  },
};

const AnimatedText = ({
  isInView = true,
  text,
  variant = "default",
}: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "open" : "initial"}
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        gap: "0.2rem",
      }}
    >
      {words.map((word, index) => (
        <Box key={index} sx={{ overflow: "hidden", display: "inline-block" }}>
          <Typography
            variant={variant === "default" ? "body1" : "h3"}
            component={motion.span}
            custom={index}
            variants={{
              initial: {
                ...slideUp.initial,
                ...opacity.initial,
              },
              open: (i: number) => ({
                ...slideUp.open(i),
                ...opacity.open,
              }),
              closed: {
                ...slideUp.closed,
                ...opacity.closed,
              },
            }}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            {word + " "}
          </Typography>
        </Box>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
