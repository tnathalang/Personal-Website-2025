import { motion } from "framer-motion";

import { Box } from "../Shared";
import Portrait from "../../assets/Portrait.png";

import styles from "./styles.module.scss";

const imageVariant = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const HeroImage = () => {
  return (
    <Box className={styles.imageWrapper}>
      <motion.img
        src={Portrait}
        variants={imageVariant}
        initial="hidden"
        animate="show"
        className={styles.heroImg}
      />
    </Box>
  );
};

export default HeroImage;
