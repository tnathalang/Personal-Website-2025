import React from "react";
import Content from "./FooterContent";

import classes from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.scrollContainer}>
        <div className={classes.stickyFooter}>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Footer;
