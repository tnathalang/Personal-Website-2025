import gsap from "gsap";
import {
  cloneElement,
  ReactElement,
  RefAttributes,
  useEffect,
  useRef,
} from "react";

interface MagneticWrapperProps {
  children: ReactElement<any, any> & RefAttributes<HTMLElement>;
}

const MagneticWrapper = ({ children }: MagneticWrapperProps) => {
  const magnet = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnet.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnet.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnet.current?.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        magnet.current!.getBoundingClientRect();

      // We need to get the proper bounding of the magnet element
      const xAxis = clientX - (left + width / 2);
      const yAxis = clientY - (top + height / 2);

      xTo(xAxis * 0.5);
      yTo(yAxis * 0.5);
    });

    magnet.current?.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return cloneElement(children, { ref: magnet });
};

export default MagneticWrapper;
