import classes from "./styles.module.scss";

interface MenuButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

interface TextType {
  label: string;
  isActive: boolean;
}

export default function MenuButton({ isActive, toggleMenu }: MenuButtonProps) {
  return (
    <div className={classes.button}>
      <div
        className={classes.slider}
        // animate={{ top: isActive ? "-100%" : "0%" }}
        // transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={classes.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" isActive={isActive} />
        </div>

        <div
          className={classes.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function PerspectiveText({ label, isActive }: TextType) {
  return (
    <div className={classes.perspectiveText}>
      <div
        className={`${classes.burger} ${isActive ? classes.burgerActive : ""}`}
      />
      {/* <Typography>{label}</Typography>

      <Typography>{label}</Typography> */}
    </div>
  );
}
