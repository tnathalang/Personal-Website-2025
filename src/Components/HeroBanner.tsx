import { Box } from "./Shared";

import HeroDescription from "./HeroSection/HeroDescription";
import HeroWrapper from "./HeroSection/HeroWrapper";

const HeroBanner = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      // justifyContent="center"
      height="100vh"
      // overflow="hidden"
      // style={{
      //   height: "100vh",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <HeroWrapper />
      <HeroDescription />
    </Box>
  );
};

export default HeroBanner;
