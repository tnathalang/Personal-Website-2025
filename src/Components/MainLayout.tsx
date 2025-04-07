import Hero from "./Hero";
import GalleryContent from "./GalleryContent";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MainLayout = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FFFFFF", "#F5F0E6", "#D2B48C"]
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
      <Hero />
      <GalleryContent />
    </motion.main>
  );
};

export default MainLayout;
