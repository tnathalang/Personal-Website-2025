import { Typography, Container } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Box } from "./Shared";

interface HeroProps {}

const Hero = (_props: HeroProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 1 } },
          }}
        >
          <Typography variant="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            dolorem ut quae pariatur. Necessitatibus id, sequi ullam velit ut
            blanditiis molestias accusantium ab, dolor dolores quibusdam dicta
            assumenda perspiciatis aliquam.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
