import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

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
  return (
    <>
      <div className={classes.menuContent}>
        <div className={classes.body}>
          <div className={classes.links}>
            {links.map((link, index) => {
              const { title, href } = link;

              return (
                <div key={index}>
                  <motion.div
                    custom={index}
                    variants={bodyVariant}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <Typography component={"a"} href={href} variant="h3">
                      {title}
                    </Typography>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className={classes.menuContentFooter}>
            <Typography>LinkedIn</Typography>
            <Typography>GitHub</Typography>
            <Typography>Instagram</Typography>
            <Typography>Contact</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuContent;
