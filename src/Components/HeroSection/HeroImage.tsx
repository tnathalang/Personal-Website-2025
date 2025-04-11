import { motion } from "framer-motion";

import { Box } from "../Shared";
import Portrait from "../../assets/Portrait.png";

interface HeroImageProps {}

const imageVariant = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const HeroImage = (props: HeroImageProps) => {
  return (
    <Box
      zIndex={-1}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <motion.img
        src={Portrait}
        variants={imageVariant}
        initial="hidden"
        animate="show"
        style={{
          width: "600px", // Fixed width
          height: "auto", // Maintain aspect ratio
          objectFit: "contain", // Ensure image is fully visible
          marginTop: "-158px", // Adjust for vertical positioning
        }}
        // style={{
        //   width: "auto",
        //   maxWidth: "60%",
        //   minWidth: "300px",
        //   height: "auto",
        //   objectFit: "contain",
        //   marginTop: "-75px",
        // }}
      />
    </Box>
  );
};

export default HeroImage;
