import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { getWordRevealAnimation } from "./animation";

interface MaskTextWrapperProps {
  children: ReactNode;
  isInView?: boolean;
  index?: number;
}

const MaskTextWrapper = ({
  children,
  isInView = true,
  index,
}: MaskTextWrapperProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("open");
    } else {
      controls.start("initial");
    }
  }, [isInView]);

  return (
    <motion.span
      custom={index}
      initial={{ transform: "translateY(100%)", opacity: 0 }}
      animate={getWordRevealAnimation(index, isInView)}
    >
      {children}
    </motion.span>
  );
};

export default MaskTextWrapper;
