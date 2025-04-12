import { motion, MotionValue } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { interpolate } from "flubber";

interface BlobProps {
  scrollProgress: MotionValue<number>;
}

// Your existing paths
const blobPaths = [
  "M41.3,-66.9C52.5,-55.3,60.4,-43.2,64.4,-30.3C68.4,-17.4,68.5,-3.7,64.1,8.3C59.6,20.2,50.7,30.3,41.2,41.1C31.6,52,21.4,63.7,8.8,67.2C-3.8,70.7,-19,65.9,-33.1,58.4C-47.3,50.9,-60.4,40.7,-64.6,27.8C-68.8,14.9,-64.1,-0.7,-57.2,-14.6C-50.4,-28.5,-41.3,-40.7,-30.2,-52.1C-19.1,-63.5,-6,-74.1,7.9,-78.7C21.7,-83.3,43.5,-81.1,41.3,-66.9Z",
  "M51.6,-69.2C64.1,-58.2,70.6,-39.4,69.5,-22.2C68.3,-5.1,59.5,10.4,52.7,26.8C45.9,43.3,41.1,60.6,29.7,65.4C18.3,70.3,0.4,62.6,-14.7,55.6C-29.8,48.7,-42.2,42.6,-52.7,32.2C-63.1,21.9,-71.6,7.3,-71.7,-7.3C-71.9,-21.9,-63.7,-36.5,-51.7,-46.5C-39.7,-56.4,-23.9,-61.8,-7.4,-61.1C9,-60.5,18,-53.7,51.6,-69.2Z",
  "M49.6,-67.3C61.7,-56.2,65.4,-35.5,68.1,-15.8C70.7,3.8,72.2,22.4,63.5,34.7C54.8,47,36,52.9,20.1,57.3C4.3,61.8,-8.5,64.8,-20.9,61.1C-33.4,57.3,-45.6,47,-55.2,34.6C-64.8,22.2,-71.7,7.6,-68.2,-5.6C-64.6,-18.9,-50.7,-30.8,-37.7,-43.1C-24.6,-55.4,-12.3,-68.1,4.5,-73.5C21.2,-78.9,42.5,-77.4,49.6,-67.3Z",
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
