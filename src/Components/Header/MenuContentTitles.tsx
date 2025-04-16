import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { MenuContentTitlesVariants } from "./animationVariant";

interface MenuContentTitlesProps {
  hovered: { isActive: boolean; index: number | null };
  href: string;
  index: number;
  setHovered: (hoverState: { isActive: boolean; index: number }) => void;
  title: string;
}

const MenuContentTitles = ({
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
      <Typography component={"a"} href={href} variant="h3">
        {title}
      </Typography>
    </motion.p>
  );
};

export default MenuContentTitles;
