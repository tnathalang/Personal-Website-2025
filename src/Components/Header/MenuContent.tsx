import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import MenuContentTitles from "./MenuContentTitles";
import { useState } from "react";
import UnderlineWrapper from "../utils/UnderlineWrapper";

interface MenuContentProps {}

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Introduction",
    href: "/",
  },
  {
    title: "Resume",
    href: "/",
  },
];

const footerLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tnathalang",
  },
  {
    name: "Github",
    href: "https://github.com/tnathalang",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/itsdrunksushi",
  },
  {
    name: "Contact",
    href: "mailto:atnathalang@gmail.com",
  },
];

const bodyVariant = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -70,
  },

  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.2,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),

  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const MenuContent = (_props: MenuContentProps) => {
  const [hovered, setHovered] = useState({ isActive: false, index: 0 });

  return (
    <div className={classes.menuContent}>
      <div className={classes.body}>
        <div className={classes.links}>
          {links.map((link, index) => (
            <motion.div
              custom={index}
              variants={bodyVariant}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <MenuContentTitles
                key={index}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
                {...link}
              />
            </motion.div>
          ))}
        </div>

        <div className={classes.menuContentFooter}>
          {footerLinks.map(({ href, name }, index) => (
            <div>
              <UnderlineWrapper>
                <Typography
                  key={index}
                  component={"a"}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </Typography>
              </UnderlineWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
