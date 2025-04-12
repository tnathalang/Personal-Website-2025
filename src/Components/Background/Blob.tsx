import { motion, MotionValue } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { interpolate } from "flubber";

interface BlobProps {
  scrollProgress: MotionValue<number>;
}

// Your existing paths
const blobPaths = [
  "M39.4,-69.3C50.2,-62,57.6,-49.7,65.1,-37.4C72.6,-25,80.1,-12.5,78.6,-0.9C77,10.7,66.3,21.4,58.4,33.1C50.5,44.8,45.5,57.5,36.3,63.5C27,69.5,13.5,68.8,0.2,68.4C-13.1,68,-26.1,67.9,-39.9,64.5C-53.6,61.1,-68.1,54.4,-77,43.1C-85.8,31.8,-89.1,15.9,-86.8,1.3C-84.5,-13.2,-76.6,-26.4,-69.5,-40.8C-62.3,-55.1,-56,-70.6,-44.6,-77.5C-33.1,-84.5,-16.6,-83,-1.1,-81C14.3,-79,28.6,-76.6,39.4,-69.3Z",
  "M30.8,-45.4C43.7,-45.9,60.6,-45.3,71.7,-37.6C82.9,-29.8,88.3,-14.9,86.6,-1C84.8,12.9,75.8,25.7,67,37.5C58.1,49.3,49.5,60,38.3,67.2C27.2,74.3,13.6,78,3.7,71.6C-6.3,65.2,-12.5,48.9,-19.4,39.2C-26.3,29.6,-33.8,26.7,-38.7,21.3C-43.5,15.9,-45.8,7.9,-46.7,-0.5C-47.5,-8.9,-46.9,-17.8,-44.2,-27.1C-41.6,-36.4,-36.9,-46,-29.1,-48.4C-21.4,-50.8,-10.7,-46,-0.9,-44.5C9,-43,17.9,-44.8,30.8,-45.4Z",
  "M34.1,-61.5C42,-54.6,44.5,-40.9,50.1,-29.5C55.7,-18.1,64.4,-9.1,68.3,2.2C72.2,13.5,71.3,27.1,61.2,30.8C51.2,34.5,32,28.3,20.2,27.2C8.5,26.1,4.3,30.1,-5.8,40.1C-15.9,50.2,-31.7,66.3,-41.5,66.3C-51.3,66.2,-55,50.1,-63.4,36.3C-71.9,22.6,-85,11.3,-87.8,-1.6C-90.6,-14.5,-82.9,-29,-71.1,-36.9C-59.3,-44.7,-43.3,-46,-30.8,-50.3C-18.2,-54.6,-9.1,-61.8,2,-65.2C13.1,-68.7,26.3,-68.5,34.1,-61.5Z",
];

const Blob = ({ scrollProgress }: BlobProps) => {
  const [t, setT] = useState(0);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const scrollValue = scrollProgress.get();
  const clampedScale = Math.min(1 + scrollValue * 3, 2.2); // Cap scale at 2.2

  // Memoize the interpolator to avoid recalculating on every render
  const interpolator = useMemo(
    () =>
      interpolate(blobPaths[current], blobPaths[next], { maxSegmentLength: 2 }),
    [current, next]
  );

  // Set interval for morphing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setT((prev) => {
        const nextT = prev + 0.01;
        if (nextT >= 1) {
          // Swap paths when the current one is finished
          setCurrent(next);
          setNext((next + 1) % blobPaths.length); // Move to the next path cyclically
          return 0;
        }
        return nextT;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [next, current]);

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: "hidden",
        scale: clampedScale,
        y: scrollValue * 200,
        transition: "all 0.3s ease-out",
      }}
    >
      <motion.path
        d={interpolator(t)}
        fill="#A8C686"
        transform="translate(100 100)"
        style={{ opacity: 0.3, transition: "d 0.3s" }}
      />
    </motion.svg>
  );
};

export default Blob;
