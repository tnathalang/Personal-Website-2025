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
  return <AnimatedButton icon={<DownIcon />} label={label} iconStart />;
};

export default HeroButton;
