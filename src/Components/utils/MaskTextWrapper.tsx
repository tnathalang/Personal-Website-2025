import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { getWordRevealVariants } from "./animation";

interface MaskTextWrapperProps {
  children: ReactNode;
  preloaderFinished: boolean;
  isInView?: boolean;
  index?: number;
}

const MaskTextWrapper = ({
  children,
  preloaderFinished,
  isInView = true,
  index,
}: MaskTextWrapperProps) => {
  const controls = useAnimation();
  const variants = getWordRevealVariants(index);

  useEffect(() => {
    if (isInView && preloaderFinished) {
      controls.start("open");
    } else {
      controls.start("initial");
    }
  }, [isInView, preloaderFinished, controls]);

  return (
    <motion.span
      custom={index}
      initial={{ transform: "translateY(100%)", opacity: 0 }}
      variants={variants}
      animate={controls}
    >
      {children}
    </motion.span>
  );
};

export default MaskTextWrapper;
