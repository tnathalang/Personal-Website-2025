import { FooterContent } from "./FooterContent";

import classes from "./styles.module.scss";

interface FooterProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Footer = ({ onMouseEnter, onMouseLeave }: FooterProps) => {
  return (
    <div
      className={classes.footerContainer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classes.footerScrollContainer}>
        <div className={classes.stickyContentContainer}>
          <div className={classes.footerContent}>
            <FooterContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
