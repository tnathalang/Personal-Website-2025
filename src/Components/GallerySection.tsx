import { motion } from "framer-motion";
import { RefObject } from "react";
import { Box } from "./Shared";

interface GallerySectionProps {
  sectionRef: RefObject<null>;
  sectionInView: boolean;
  staggerDirection: number;
}

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const getGridContainerVariants = (staggerDirection: number) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, staggerDirection },
  },
});

const useStyles = () => ({
  skeletons: {
    width: 300,
    height: 300,
    borderRadius: 1,
    bgcolor: "black",
  },
});

export const GallerySection = (props: GallerySectionProps) => {
  const { sectionRef, sectionInView, staggerDirection } = props;
  const classes = useStyles();

  return (
    <Box
      ref={sectionRef}
      marginTop={2}
      marginBottom={1}
      display="flex"
      gap={2}
      component={motion.section}
      initial="hidden"
      animate={sectionInView ? "show" : "hidden"}
      variants={getGridContainerVariants(staggerDirection)}
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
  );
};
