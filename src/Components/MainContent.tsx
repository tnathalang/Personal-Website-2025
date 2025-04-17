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

const TestIntro1 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <motion.div style={{ y }} className="relative h-full">
        <div
          style={{
            backgroundColor: "#D3CEC4",
            height: "800px",
          }}
        >
          WHERE HERO SUPPOSED TO BE
        </div>
      </motion.div>
    </div>
  );
};

const TestDescription = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10rem", // my-40 = margin-top & bottom: 10rem
        marginBottom: "10rem",
      }}
    >
      <p
        style={{
          fontSize: "7.5vw",
          textTransform: "uppercase",
          textAlign: "center",
          maxWidth: "50vw",
          lineHeight: 1, // Tailwind's "leading-none" = line-height: 1
        }}
      >
        The quick brown fox jumps over the lazy dog
      </p>
    </div>
  );
};

const TestSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        overflow: "hidden",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "5rem", // Tailwind p-20 = 5rem
          mixBlendMode: "difference",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
      >
        <p
          style={{
            width: "50vw",
            fontSize: "2vw",
            alignSelf: "flex-end", // Tailwind self-end
            textTransform: "uppercase",
            mixBlendMode: "difference",
          }}
        >
          Beauty and quality need the right time to be conceived and realised
          even in a world that is in too much of a hurry.
        </p>
        <p
          style={{
            fontSize: "5vw",
            textTransform: "uppercase",
            mixBlendMode: "difference",
          }}
        >
          Background Parallax
        </p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "-10vh",
          left: 0,
          height: "120vh",
          width: "100%",
        }}
      >
        <motion.div
          style={{ y, position: "relative", width: "100%", height: "100%" }}
        >
          <div
            style={{
              backgroundColor: "#A8D08D",
              height: "800px",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <h1
        style={{
          fontSize: "14vw",
          lineHeight: 0.8,
          marginTop: "2.5rem", // mt-10 = 2.5rem
        }}
      >
        Sticky Footer
      </h1>
      <p>©copyright</p>
    </div>
  );
};

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
      {/* Sticky Hero Section + Pusher */}
      <div style={{ marginBottom: "-50vh", zIndex: 1 }}>
        <div style={{ position: "sticky", top: 0 }}>
          <HeroSection />
        </div>
        <div style={{ height: "50vh" }} />
      </div>

      {/* Sticky Component 1 + Pusher */}
      <div style={{ marginBottom: "-50vh", zIndex: 2 }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            marginBottom: "-50vh",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "-20vh",
          }}
        >
          <div style={{ height: "400px", width: "100%" }}>
            <IntroSection
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter("secondary")}
            />
          </div>
        </div>
        <div style={{ height: "50vh" }} />
      </div>

      <div style={{ marginBottom: "-50vh", zIndex: 2 }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "-20vh",
          }}
        >
          <div style={{ height: "75vh", width: "100%" }}>
            <ToolsCard />
          </div>
        </div>
        <div style={{ height: "50vh" }} />
      </div>

      {/* Non-sticky Component 2 (scrolls normally) */}
      <div
        style={{
          background: "#adc2a9",
          width: "100%",
          height: "200px",
          zIndex: 3,
          position: "relative",
          minHeight: "100vh",
        }}
      >
        Component 2
      </div>

      {/* Footer Wrapper */}
      <div style={{ marginTop: "-100vh" }}>
        <div style={{ height: "100vh" }} />
        <div
          style={{
            background: "#78736C",
            width: "100%",
            height: "800px",
            position: "sticky",
            bottom: 0,
            display: "flex",
            alignItems: "flex-end",
            paddingBottom: "2rem",
          }}
        >
          <Typography variant="h1" style={{ color: "white" }}>
            Footer
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MainContent;
