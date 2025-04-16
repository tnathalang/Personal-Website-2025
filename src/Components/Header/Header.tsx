import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import classes from "./styles.module.scss";
import MenuButton from "./MenuButton";
import { Typography } from "@mui/material";
import MenuContent from "./MenuContent";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: 0,
    right: 0,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "100px",
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

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.header}>
      <Typography>Akira Na Thalang - Developer</Typography>
      <div className={classes.menuWrapper}>
        <MenuButton
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
        <motion.div
          className={classes.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <MenuContent />}</AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
