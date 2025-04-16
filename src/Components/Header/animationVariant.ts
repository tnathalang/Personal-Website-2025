export const getMenuVariant = (isMobile: boolean) => ({
  open: {
    width: !isMobile ? "480px" : "400px",
    height: !isMobile ? "650px" : "850px",
    top: 0,
    right: 0,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "120px",
    height: "40px",
    top: 0,
    right: 0,
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
});
