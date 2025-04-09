import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      key="preloader"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      exit={{ y: "-100%" }}
      transition={{
        delay: 1.5,
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
      }}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        zIndex: 1300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Typography variant="h3">Loading...</Typography>
    </motion.div>
  );
};

export default Preloader;
