import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updapteMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updapteMousePosition);

    return () => {
      window.removeEventListener("mousemove", updapteMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
