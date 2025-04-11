import { Box } from "../Shared";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroDescription from "./HeroDescription";

import styles from "./styles.module.scss";

const HeroWrapper = () => {
  return (
    <Box>
      <Box className={styles.heroContainer}>
        <HeroText text={"Hello - I'm Akira"} />
        <HeroImage />
      </Box>
      <HeroDescription />
    </Box>
  );
};

export default HeroWrapper;
