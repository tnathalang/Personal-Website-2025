import { motion } from "framer-motion";
import { ReactNode } from "react";

import classes from "./styles.module.scss";
import { Typography, useMediaQuery } from "@mui/material";
import { getMenuVariant } from "./animationVariant";

interface MenuButtonProps {
  children: ReactNode;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const MotionTypography = motion(Typography);

function MenuButton({ children, isActive, setIsActive }: MenuButtonProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div
      className={classes.menu}
      variants={getMenuVariant(isMobile)}
      animate={isActive ? "open" : "closed"}
      initial="closed"
      onClick={() => setIsActive(!isActive)}
    >
      <div className={classes.expandableButton}>
        <MotionTypography
          animate={{
            marginLeft: isActive ? 40 : 0,
            fontSize: isActive ? "2rem" : "1.25rem",
          }}
          transition={{
            marginLeft: isActive
              ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
              : { duration: 0.2, delay: 0.7, ease: "easeOut" },
            fontSize: isActive
              ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
              : { duration: 0.4, delay: 0.6, ease: "easeOut" },
          }}
        >
          Menu
        </MotionTypography>
        <div
          className={`${classes.burger} ${
            isActive ? classes.burgerActive : ""
          }`}
        />
      </div>
      {children}
    </motion.div>
  );
}

export default MenuButton;
