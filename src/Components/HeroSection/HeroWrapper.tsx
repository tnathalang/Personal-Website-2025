import { Box } from "../Shared";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroDescription from "./HeroDescription";

import styles from "./styles.module.scss";
import { MouseActions } from "./types";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroWrapperProps extends MouseActions {}

const HeroWrapper = (props: HeroWrapperProps) => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });

  const stickyY = useTransform(imageScrollYProgress, [0, 1], [0, 300]);
  const smoothY = useSpring(stickyY, { stiffness: 120, damping: 20 });

  // const small = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // const medium = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // const large = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={wrapperRef}>
      <Box className={styles.heroContainer}>
        <HeroText text={"Hello - I'm Akira"} motionValue={smoothY} />
        <HeroImage ref={imageRef} />
        <HeroDescription mouseVariantAction={props} />
      </Box>
    </div>
  );
};

export default HeroWrapper;
