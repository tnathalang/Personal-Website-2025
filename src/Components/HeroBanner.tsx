import React from "react";
import Portrait from "../assets/Portrait.png";
import { Typography } from "@mui/material";
import { Box } from "./Shared";

type HeroBannerProps = {};

const HeroBanner = (props: HeroBannerProps) => {
  return (
    <>
      <Box display="flex">
        <div>
          <img src={Portrait} />
        </div>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-around"
          flexDirection="column"
          alignItems="center"
        >
          <Box>
            <Typography variant="h2">A Na Thalang</Typography>
          </Box>
          <Box>
            <Typography variant="h2">Full stack developer</Typography>
          </Box>
          <Box>
            <Typography variant="h2">Montreal, Quebec</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroBanner;
