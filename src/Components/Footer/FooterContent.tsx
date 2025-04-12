import classes from "./styles.module.scss";

export default function Content() {
  return (
    <div className={classes.content}>
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={classes.section2}>
      <h1 className={classes.section2Heading}>Sticky Footer</h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.navColumn}>
        <h3 className={classes.navHeading}>About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>

      <div className={classes.navColumn}>
        <h3 className={classes.navHeading}>Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
