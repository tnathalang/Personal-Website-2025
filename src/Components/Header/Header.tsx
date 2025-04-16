import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import classes from "./styles.module.scss";
import { Typography } from "@mui/material";
import MenuContent from "./MenuContent";
import MenuButton from "./MenuButton";

interface HeaderProps {}

function Header(_props: HeaderProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.header}>
      <Typography>Akira Na Thalang - Developer</Typography>
      <div>
        <MenuButton isActive={isActive} setIsActive={setIsActive}>
          <AnimatePresence>{isActive && <MenuContent />}</AnimatePresence>
        </MenuButton>
      </div>
    </div>
  );
}

export default Header;
