import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import classes from "./styles.module.scss";
import { Typography } from "@mui/material";
import MenuContent from "./MenuContent";
import MenuButton from "./MenuButton";

interface HeaderProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

function Header({ handleMouseEnter, handleMouseLeave }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.header}>
      <Typography>Akira Na Thalang - Developer</Typography>
      <div
        className={classes.menuWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MenuButton isActive={isActive} setIsActive={setIsActive}>
          <AnimatePresence>{isActive && <MenuContent />}</AnimatePresence>
        </MenuButton>
      </div>
    </div>
  );
}

export default Header;
