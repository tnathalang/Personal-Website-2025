import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import MenuContent from "./MenuContent";
import MenuButton from "./MenuButton";

import classes from "./styles.module.scss";
import { Typography } from "@mui/material";
import UnderlineWrapper from "../utils/UnderlineWrapper";

interface HeaderProps {}

function Header(_props: HeaderProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerText}>
        <UnderlineWrapper>
          <Typography>Akira Na Thalang - Developer</Typography>
        </UnderlineWrapper>
      </div>
      <MenuButton isActive={isActive} setIsActive={setIsActive}>
        <AnimatePresence>{isActive && <MenuContent />}</AnimatePresence>
      </MenuButton>
    </div>
  );
}

export default Header;
