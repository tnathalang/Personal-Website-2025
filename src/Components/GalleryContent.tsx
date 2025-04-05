import { Box } from "@mui/material";
import { useRef } from "react";
import { useInView } from "framer-motion";
import GallerySection from "./GallerySection";

const useStyles = () => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const GalleryContent = () => {
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
