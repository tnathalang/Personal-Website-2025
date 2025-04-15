import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

import styles from "./styles.module.scss";

interface HeroWrapperProps {}

const HeroWrapper = (_props: HeroWrapperProps) => {
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
    <div style={{ height: "100%" }}>
      <motion.div
        className={styles.heroContainer}
        style={{ y: containerYMotionValue }}
      >
        <HeroText text={"Hello - I'm Akira"} motionValue={smoothY} />
        <HeroImage />
      </motion.div>
    </div>
  );
};

export default HeroWrapper;
