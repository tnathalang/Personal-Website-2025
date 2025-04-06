import { Typography, Container } from "@mui/material";
import {
  motion,
  MotionValue,
  useAnimation,
  useInView,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { Box } from "./Shared";

interface HeroProps {
  scrollYProgress: MotionValue<number>;
}

const Hero = (props: HeroProps) => {
  const { scrollYProgress } = props;

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

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
        position: "sticky",
        top: 0,
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
          style={{ scale, rotate }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              padding: "1rem",
            }}
          >
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
