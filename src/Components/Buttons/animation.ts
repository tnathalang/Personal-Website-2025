import { gsap } from "gsap";

export function createMyTimeline(
  circle: HTMLElement,
  letters: NodeListOf<HTMLElement>
) {
  const tl = gsap.timeline({ paused: true });

  tl.to(
    circle,
    {
      left: "-10%",
      width: "120%",
      height: "300%",
      duration: 0.6,
      ease: "power1.out",
    },
    "enter"
  )
    .to(
      letters,
      {
        color: "#3b4b3b",
        ease: "none",
        duration: 0.001,
        stagger: 0.021,
      },
      "enter"
    )
    .to(
      circle,
      {
        left: "100%",
        width: "125%",
        height: "300%",
        duration: 0.4,
      },
      "exit"
    )
    .to(
      letters,
      {
        color: "black",
        ease: "none",
        duration: 0.1,
        stagger: 0.017,
      },
      "exit"
    );

  return tl;
}
