import HeroWrapper from "./HeroSection/HeroSection";
import Description from "./DescriptionSection/Description";
import IntroSection from "./IntroSection/IntroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import { ParallaxSection } from "./utils/ParallaxWrapper";

import classes from "../main.module.scss";
import { Typography } from "@mui/material";

interface InnerPageContentProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const InnerPageContent = ({
  handleMouseEnter,
  handleMouseLeave,
}: InnerPageContentProps) => {
  return (
    <div className={classes.innerPageContainer}>
      <HeroWrapper />
      <div className={classes.cardContainer}>
        <div>
          <ParallaxSection yRange={["0px", "-200px"]}>
            <IntroSection
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            />
          </ParallaxSection>
          <ParallaxSection yRange={["0px", "-150px"]}>
            <ToolsCard />
          </ParallaxSection>

          <div style={{ marginTop: "-150px" }}>
            <Description
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            />
            <section
              style={{
                position: "sticky",
                bottom: 0,
                // backgroundColor: "red",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                height: "800px", // Adjust height as needed
              }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h3>Top part</h3>
                <div
                  style={{
                    // backgroundColor: "red",
                    height: "600px",
                    display: "flex",
                    alignItems: "flex-end",
                    width: "100%",
                  }}
                >
                  <Typography variant="h1">You've reached the end.</Typography>
                  <Typography variant="h1">Or maybe the beginning?</Typography>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPageContent;
