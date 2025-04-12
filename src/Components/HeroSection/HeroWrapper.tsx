import { Box } from "../Shared";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroDescription from "./HeroDescription";

import styles from "./styles.module.scss";
import { MouseActions } from "./types";

interface HeroWrapperProps extends MouseActions {}

const HeroWrapper = (props: HeroWrapperProps) => {
  return (
    <Box>
      <Box className={styles.heroContainer}>
        <HeroText text={"Hello - I'm Akira"} />
        <HeroImage />
      </Box>
      <HeroDescription mouseVariantAction={props} />
    </Box>
  );
};

export default HeroWrapper;
