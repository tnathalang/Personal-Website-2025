import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { MenuContentTitlesVariants } from "./animationVariant";

interface MenuContentTitlesProps {
  external?: boolean;
  hovered: { isActive: boolean; index: number | null };
  href: string;
  index: number;
  setHovered: (hoverState: { isActive: boolean; index: number }) => void;
  title: string;
}

const MenuContentTitles = ({
  external = false,
  hovered,
  href,
  index,
  setHovered,
  title,
}: MenuContentTitlesProps) => {
  const isHovered = hovered.index === index;
  const shouldBlur = hovered.isActive && !isHovered;

  return (
    <motion.p
      onMouseOver={() => setHovered({ isActive: true, index })}
      onMouseLeave={() => setHovered({ isActive: false, index: 0 })}
      initial={false}
      variants={MenuContentTitlesVariants}
      animate={shouldBlur ? "blurred" : "clear"}
    >
      <Typography
        component={"a"}
        href={href}
        variant="h3"
        target={external ? "_blank" : ""}
      >
        {title}
      </Typography>
    </motion.p>
  );
};

export default MenuContentTitles;
