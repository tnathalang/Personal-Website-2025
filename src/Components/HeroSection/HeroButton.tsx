import { styled } from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AnimatedButton from "../Buttons/AnimatedButton";

interface HeroButtonProps {
  label: string;
}

const DownIcon = styled(ChevronDownIcon)(() => ({
  width: "16px",
  height: "16px",
}));

const HeroButton = ({ label }: HeroButtonProps) => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <AnimatedButton
      iconStart
      icon={<DownIcon />}
      label={label}
      onClick={handleScrollDown}
    />
  );
};

export default HeroButton;
