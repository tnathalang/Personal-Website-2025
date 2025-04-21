import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

import styles from "./styles.module.scss";

interface HeroSectionProps {
  preloaderFinished: boolean;
}

const HeroSection = ({ preloaderFinished }: HeroSectionProps) => {
  const imageRef = useRef(null);

  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });

  const stickyY = useTransform(imageScrollYProgress, [0, 1], [0, 50]);
  const smoothY = useSpring(stickyY, { stiffness: 120, damping: 20 });

  return (
    <div className={styles.heroContainer}>
      <HeroText
        text={"Hello - I'm Akira"}
        motionValue={smoothY}
        preloaderFinished={preloaderFinished}
      />
      <div ref={imageRef}>
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
