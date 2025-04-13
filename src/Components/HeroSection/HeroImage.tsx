import { useRef } from "react";

import Portrait from "../../assets/Portrait.png";

import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroImageProps {}

const HeroImage = (_props: HeroImageProps) => {
  const imageWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapperRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className={styles.imageWrapper} ref={imageWrapperRef}>
      <motion.div style={{ scale }}>
        <img src={Portrait} alt="Portrait" className={styles.heroImg} />
      </motion.div>
    </div>
  );
};

export default HeroImage;
