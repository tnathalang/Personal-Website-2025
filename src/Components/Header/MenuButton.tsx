import { motion } from "framer-motion";

import classes from "./styles.module.scss";
import { Typography } from "@mui/material";

interface MenuButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

interface TextType {
  label: string;
}

export default function MenuButton({ isActive, toggleMenu }: MenuButtonProps) {
  return (
    <div className={classes.button}>
      <motion.div
        className={classes.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={classes.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>

        <div
          className={classes.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: TextType) {
  return (
    <div className={classes.perspectiveText}>
      <Typography>{label}</Typography>

      <Typography>{label}</Typography>
    </div>
  );
}
