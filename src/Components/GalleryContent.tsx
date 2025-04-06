import { Box } from "@mui/material";
import { useRef } from "react";
import { motion, MotionValue, useInView, useTransform } from "framer-motion";
import GallerySection from "./GallerySection";

interface GalleryContentProps {
  scrollYProgress: MotionValue<number>;
}

const useStyles = () => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#cbcbcb",
  },
});

const GalleryContent = (props: GalleryContentProps) => {
  const { scrollYProgress } = props;
  const classes = useStyles();
  const galleryRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true });
  const section2InView = useInView(section2Ref, { once: true });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <motion.div style={{ scale, rotate }}>
      <Box ref={galleryRef} sx={classes.root}>
        <GallerySection
          staggerDirection={1}
          sectionInView={section1InView}
          sectionRef={section1Ref}
        />

        <GallerySection
          staggerDirection={-1}
          sectionInView={section2InView}
          sectionRef={section2Ref}
        />
      </Box>
    </motion.div>
  );
};

export default GalleryContent;
