import Portrait from "../assets/Portrait.png";
import { Typography } from "@mui/material";
import { Box } from "./Shared";

type HeroBannerProps = {};

const HeroBanner = (props: HeroBannerProps) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box paddingLeft={10} zIndex={2}>
        <Typography variant="h1">Akira Na Thalang</Typography>
      </Box>

      <Box
        zIndex={-1}
        top={-83}
        position="relative"
        justifyContent="center"
        display="flex"
      >
        <img src={Portrait} />
      </Box>

      <Box
        position="relative"
        zIndex={2}
        marginTop={-30}
        flexWrap="wrap"
        paddingX={10}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        <Typography
          variant="h1"
          color="black"
          sx={{
            textShadow: "1px 3px 2px rgb(255, 255, 255)",
          }}
        >
          Full stack Developer
        </Typography>
        <Typography variant="h1">Montreal, Quebec</Typography>
      </Box>
    </Box>
  );
};

export default HeroBanner;
