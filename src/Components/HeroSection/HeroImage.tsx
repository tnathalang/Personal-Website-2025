import { motion, MotionValue } from "framer-motion";

import Portrait from "../../assets/Portrait.png";

import styles from "./styles.module.scss";

interface HeroImageProps {
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

const HeroImage = ({ scrollSpeed }: HeroImageProps) => {
  return (
    <motion.div className={styles.imageWrapper}>
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
