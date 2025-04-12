import Description from "./DescriptionSection/Description";
import GalleryContent from "./GalleryContent";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "rgba(245, 240, 230, 1)", // #F5F0E6 with full opacity (starting color)
      "rgba(245, 240, 230, 0.8)", // A lighter beige with 0.8 opacity for smoother transition in the middle
      "rgba(168, 198, 134, 0.3)", // Soft green with 0.3 opacity for the end color
    ]
  );

  return (
    <motion.main
      ref={container}
      style={{
        backgroundColor,
        width: "100%",
        margin: 0,
      }}
    >
      {children}
    </motion.main>
  );
};

export default GradientBackground;
