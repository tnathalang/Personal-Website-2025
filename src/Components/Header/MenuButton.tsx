import { motion } from "framer-motion";
import { ReactNode } from "react";

import classes from "./styles.module.scss";
import { Typography } from "@mui/material";

interface MenuButtonProps {
  children: ReactNode;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: 0,
    right: 0,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "120px",
    height: "40px",
    top: 0,
    right: 0,
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function MenuButton({ children, isActive, setIsActive }: MenuButtonProps) {
  return (
    <motion.div
      className={classes.menu}
      variants={menu}
      animate={isActive ? "open" : "closed"}
      initial="closed"
      onClick={() => setIsActive(!isActive)}
    >
      <div className={classes.expandableButton}>
        <motion.div
          animate={{ marginLeft: isActive ? 40 : 0 }}
          transition={
            isActive
              ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
              : { duration: 0.2, delay: 0.7, ease: "easeOut" }
          }
        >
          <Typography>Menu</Typography>
        </motion.div>
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
