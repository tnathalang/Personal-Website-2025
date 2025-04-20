import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { curveVariant, opacity, slideUp } from "./animation";

import classes from "./styles.module.scss";

const Preloader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={classes.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <Typography variant="h3">Loading...</Typography>
          </motion.p>

          <svg>
            <motion.path
              variants={curveVariant(initialPath, targetPath)}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
