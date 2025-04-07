import { Box } from "@mui/material";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GallerySection from "./GallerySection";

interface GalleryContentProps {}

const useStyles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "70vh",
  },
});

const GalleryContent = (_props: GalleryContentProps) => {
  const classes = useStyles();
  const galleryRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true });
  const section2InView = useInView(section2Ref, { once: true });

  return (
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
  );
};

export default GalleryContent;
