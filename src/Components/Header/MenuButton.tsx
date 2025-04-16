import { Typography } from "@mui/material";
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
      <div className={classes.slider}>
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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Typography>{label}</Typography>

        <div
          className={`${classes.burger} ${
            isActive ? classes.burgerActive : ""
          }`}
        />
      </div>
    </div>
  );
}
