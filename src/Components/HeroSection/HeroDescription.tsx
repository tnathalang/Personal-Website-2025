import { motion, MotionValue } from "framer-motion";
import HeroButton from "./HeroButton";
import { Box } from "../Shared";
import { useRef } from "react";
import { MouseActions } from "./types";
import AnimatedText from "../utils/AnimatedText";

interface HeroDescriptionProps {
  mouseVariantAction: MouseActions;
  scrollSpeed?: MotionValue<number>;
}

const phrase =
  "Turning ideas into interactive web experiences—one line of React code, one sip of coffee, and one cat cuddle at a time. Crafting front-end magic with passion and precision building intuitive, user-centered designs";

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 20, // Start 20px below the normal position
  },
  open: {
    opacity: 1,
    y: 0, // Move to the normal position
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

const HeroDescription = ({
  mouseVariantAction,
  scrollSpeed,
}: HeroDescriptionProps) => {
  const container = useRef(null);

  return (
    <Box
      display="grid"
      gap={2}
      gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} // 1 column on mobile, 2 equal columns on desktop, fr is fraction
      paddingX={{ xs: 2, sm: 4, md: 6 }} // extra small 2, small 4, medium 6
      ref={container}
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginRight={5}
        marginLeft={5}
        gridColumn={{ xs: "1", sm: "1" }}
        component={motion.div}
      >
        <AnimatedText text={phrase} />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridColumn={{ xs: "1", sm: "2" }}
        viewport={{ once: true }}
      >
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate="open"
          onMouseEnter={mouseVariantAction.onMouseEnter}
          onMouseLeave={mouseVariantAction.onMouseLeave}
        >
          <HeroButton label="Scroll for more" />
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroDescription;
