export const getWordRevealAnimation = (index: number, isInView: boolean) => {
  return isInView
    ? {
        transform: "translateY(0%)",
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.01 * index,
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
