import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ParallaxSection = ({
  children,
  yRange = ["0px", "-30px"],
}: {
  children: React.ReactNode;
  yRange: [string, string];
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const padding = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        paddingTop: padding,
        position: "sticky",
        top: 0,
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};
