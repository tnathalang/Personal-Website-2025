import { Box } from "@mui/material";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const useStyles = () => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skeletons: {
    width: 300,
    height: 300,
    borderRadius: 1,
    bgcolor: "white",
  },
});

const getGridContainerVariants = (staggerDirection: number) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, staggerDirection },
  },
});

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const GalleryContent = () => {
  const classes = useStyles();
  const galleryRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true });
  const section2InView = useInView(section2Ref, { once: true });

  return (
    <Box ref={galleryRef} sx={classes.root}>
      {/* Section 1 */}
      <Box
        ref={section1Ref}
        marginTop={2}
        marginBottom={1}
        display="flex"
        gap={2}
        component={motion.section}
        initial="hidden"
        animate={section1InView ? "show" : "hidden"}
        variants={getGridContainerVariants(1)}
      >
        <Box
          sx={classes.skeletons}
          component={motion.div}
          variants={childVariants}
        ></Box>
        <Box
          sx={classes.skeletons}
          component={motion.div}
          variants={childVariants}
        ></Box>
        <Box
          sx={classes.skeletons}
          component={motion.div}
          variants={childVariants}
        ></Box>
        <Box
          sx={classes.skeletons}
          component={motion.div}
          variants={childVariants}
        ></Box>
      </Box>

      {/* Section 2 */}
      <Box
        ref={section2Ref}
        marginTop={2}
        marginBottom={1}
        display="flex"
        gap={2}
        component={motion.section}
        initial="hidden"
        animate={section2InView ? "show" : "hidden"}
        variants={getGridContainerVariants(-1)}
      >
        <Box
          sx={classes.skeletons}
          component={motion.div}
          variants={childVariants}
        ></Box>
        <Box
          sx={classes.skeletons}
          component={motion.div}
          variants={childVariants}
        ></Box>
        <Box
          sx={classes.skeletons}
          component={motion.div}
          variants={childVariants}
        ></Box>
        <Box
          sx={classes.skeletons}
          component={motion.div}
          variants={childVariants}
        ></Box>
      </Box>
    </Box>
  );
};

export default GalleryContent;
