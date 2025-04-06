import Hero from "./Hero";
import GalleryContent from "./GalleryContent";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const MainLayout = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relaticve h-[200vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <GalleryContent scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default MainLayout;
