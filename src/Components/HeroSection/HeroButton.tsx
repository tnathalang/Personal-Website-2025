import { styled, Typography } from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AnimatedButton from "../Buttons/AnimatedButton";
import { Box } from "../Shared";

const DownIcon = styled(ChevronDownIcon)(() => ({
  width: "16px",
  height: "16px",
}));

const HeroButton = () => {
  return (
    <AnimatedButton>
      <DownIcon />
      <Box marginLeft={2}>
        <Typography>Scroll for more</Typography>
      </Box>
    </AnimatedButton>
  );
};

export default HeroButton;
