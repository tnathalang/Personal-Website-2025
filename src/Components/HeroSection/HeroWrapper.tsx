import { Box } from "../Shared";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroDescription from "./HeroDescription";

import styles from "./styles.module.scss";
import { MouseActions } from "./types";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroWrapperProps extends MouseActions {}

const HeroWrapper = (props: HeroWrapperProps) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const small = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const medium = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const large = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <Box ref={heroRef}>
      <Box className={styles.heroContainer}>
        <HeroText text={"Hello - I'm Akira"} />
        <HeroImage />
      </Box>
      <HeroDescription mouseVariantAction={props} />
    </Box>
  );
};

export default HeroWrapper;
