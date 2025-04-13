import Content from "./FooterContent";

import classes from "./styles.module.scss";

interface FooterProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Footer = ({ onMouseEnter, onMouseLeave }: FooterProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.scrollContainer}>
        <div
          className={classes.stickyFooter}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Footer;
