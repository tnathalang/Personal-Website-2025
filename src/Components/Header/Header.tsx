import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import MenuContent from "./MenuContent";
import MenuButton from "./MenuButton";

import classes from "./styles.module.scss";
import { Typography } from "@mui/material";
import UnderlineWrapper from "../utils/UnderlineWrapper";
import { Link } from "react-router-dom";

interface HeaderProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const Header = ({ onMouseEnter, onMouseLeave }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerText}>
        <UnderlineWrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography>Akira Na Thalang - Developer</Typography>
          </Link>
        </UnderlineWrapper>
      </div>
      <div className={classes.actionsContainer}>
        <div className={classes.headerActions}>
          <Typography>About me</Typography>
          <Typography>Resume</Typography>
          <Typography>Home</Typography>
        </div>
      </div>
      {/* <MenuButton
        isActive={isActive}
        setIsActive={setIsActive}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <AnimatePresence>
          {isActive && <MenuContent isActive={isActive} />}
        </AnimatePresence>
      </MenuButton> */}
    </div>
  );
};
