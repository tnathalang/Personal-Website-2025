import { Box } from "../Shared";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroDescription from "./HeroDescription";

import styles from "./styles.module.scss";
import { MouseActions } from "./types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroWrapperProps extends MouseActions {}

const HeroWrapper = (props: HeroWrapperProps) => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const stickyY = useTransform(imageScrollYProgress, [0, 1], [0, 50]);
  const smoothY = useSpring(stickyY, { stiffness: 120, damping: 20 });

  const containerYMotionValue = useTransform(
    containerScrollYProgress,
    [0, 1],
    ["0vh", "150vh"]
  );

  return (
    <div>
      <motion.div
        className={styles.heroContainer}
        style={{ y: containerYMotionValue }}
      >
        <HeroText text={"Hello - I'm Akira"} motionValue={smoothY} />
        <HeroImage ref={imageRef} />
        <HeroDescription mouseVariantAction={props} />
      </motion.div>
    </div>
  );
};

export default HeroWrapper;
