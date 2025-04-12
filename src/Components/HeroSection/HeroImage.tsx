import { motion, MotionValue } from "framer-motion";

import Portrait from "../../assets/Portrait.png";

import styles from "./styles.module.scss";
import { RefObject } from "react";

interface HeroImageProps {
  ref: RefObject<null>;
  scrollSpeed?: MotionValue<number>;
}

const imageVariant = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
  },
};

const HeroImage = ({ ref, scrollSpeed }: HeroImageProps) => {
  return (
    <motion.div className={styles.imageWrapper} ref={ref}>
      <motion.img
        src={Portrait}
        alt="Portrait"
        // variants={imageVariant}
        // initial="hidden"
        // animate="show"
        className={styles.heroImg}
      />
    </motion.div>
  );
};

export default HeroImage;
