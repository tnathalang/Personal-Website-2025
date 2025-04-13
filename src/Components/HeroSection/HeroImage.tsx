import { RefObject, useRef } from "react";

import Portrait from "../../assets/Portrait.png";

import styles from "./styles.module.scss";

interface HeroImageProps {
  ref: RefObject<null>;
}

const HeroImage = (_props: HeroImageProps) => {
  const imageWrapperRef = useRef(null);

  return (
    <div className={styles.imageWrapper} ref={imageWrapperRef}>
      <img src={Portrait} alt="Portrait" className={styles.heroImg} />
    </div>
  );
};

export default HeroImage;
