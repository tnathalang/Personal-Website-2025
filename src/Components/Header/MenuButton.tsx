import { motion } from "framer-motion";
import { ReactNode } from "react";

import classes from "./styles.module.scss";
import { Typography, useMediaQuery } from "@mui/material";
import { getMenuVariant, getTransition } from "./animationVariant";

interface MenuButtonProps {
  children: ReactNode;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  setIsActive: (active: boolean) => void;
}

const MotionTypography = motion.create(Typography);

const getSpring = (isActive: boolean) =>
  isActive
    ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    : { duration: 0.4, delay: 0.6, ease: "easeOut" };

const MenuButton = ({
  children,
  isActive,
  onMouseEnter,
  onMouseLeave,
  setIsActive,
}: MenuButtonProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div
      className={classes.menu}
      variants={getMenuVariant(isMobile)}
      animate={isActive ? "open" : "closed"}
      initial="closed"
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classes.expandableButton}>
        <MotionTypography
          initial={false}
          animate={{
            marginLeft: isActive ? 40 : 0,
            marginTop: isActive ? 10 : 0,
            fontSize: isActive ? "2rem" : "1.25rem",
          }}
          transition={getTransition(isActive)}
        >
          MENU
        </MotionTypography>
        <motion.div
          className={`${classes.burger} ${
            isActive ? classes.burgerActive : ""
          }`}
          animate={{
            marginTop: isActive ? 10 : 0,
            marginRight: isActive ? 16 : 0,
          }}
          transition={{
            marginTop: getSpring(isActive),
            marginRight: getSpring(isActive),
          }}
        />
      </div>
      {children}
    </motion.div>
  );
};

export default MenuButton;
