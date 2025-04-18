import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Footer from "./Footer/Footer";
import Cursor from "./Cursor/Cursor";

import classes from "../main.module.scss";
import InnerPageContent from "./InnerPageContent";
import { Header } from "./Header/Header";
import HeroWrapper from "./HeroSection/HeroSection";
import HeroSection from "./HeroSection/HeroSection";
import { Typography } from "@mui/material";
import IntroSection from "./IntroSection/IntroSection";
import ToolsCard from "./ToolsSection/ToolsCard";
import Description from "./DescriptionSection/Description";
import theme from "../theme";

const MainContent = () => {
  const mainContentRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll({
    target: mainContentRef,
    offset: ["start end", "end end"],
  });

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };
  const handleMouseEnter = (variant: string) => () => setCursorVariant(variant);

  return (
    <>
      <div style={{ marginBottom: "-50vh", zIndex: 1 }}>
        <div style={{ position: "sticky", top: 0 }}>
          <HeroSection />
        </div>
        <div style={{ height: "50vh" }} />
      </div>

      <div style={{ marginBottom: "-50vh", zIndex: 2 }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            display: "flex",
            justifyContent: "center",
            marginTop: "-20vh",
          }}
        >
          <div style={{ width: "100%", marginBottom: "-100px" }}>
            <IntroSection
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter("secondary")}
            />
          </div>
        </div>
        <div style={{ height: "50vh" }} />
      </div>

      <div style={{ marginBottom: "-55vh", zIndex: 2 }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "75vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "-20vh",
          }}
        >
          <ToolsCard />
        </div>
        <div style={{ height: "50vh" }} />
      </div>

      <div>
        <Description
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter("secondary")}
        />
        <div
          style={{
            position: "relative",
            height: "800px",
            clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "calc(100vh + 800px)",
              top: "-100vh",
            }}
          >
            <div
              style={{
                height: "800px",
                position: "sticky",
                top: "calc(100vh - 800px)",
              }}
            >
              <div
                style={{
                  backgroundColor: theme.palette.secondary.main,
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h1">Section 1</Typography>
                <Typography variant="h1">This is a footer</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
