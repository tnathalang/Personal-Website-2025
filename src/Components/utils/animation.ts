export const getWordRevealAnimation = (
  index: number | undefined,
  isInView: boolean
) => {
  return isInView
    ? {
        transform: "translateY(0%)",
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index ? 0.01 * index : 0.01,
        },
      }
    : {
        transform: "translateY(100%)",
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      };
};
