import { ReactNode } from "react";

interface ScrollPinSectionWrapperProps {
  children: ReactNode;
}

const ScrollPinSectionWrapper = ({
  children,
}: ScrollPinSectionWrapperProps) => {
  return (
    <div style={{ marginBottom: "-55vh", zIndex: 2 }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          justifyContent: "center",
          marginTop: "-20vh",
        }}
      >
        {children}
      </div>
      <div style={{ height: "50vh" }} />
    </div>
  );
};

export default ScrollPinSectionWrapper;
