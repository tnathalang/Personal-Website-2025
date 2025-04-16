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
    marginTop: "16px",
    marginRight: "16px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
});

export const MenuContentTitlesVariants = {
  clear: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
  blurred: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
};

export const getTransition = (isActive: boolean) => ({
  marginLeft: isActive
    ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    : { duration: 0.4, delay: 0.6, ease: "easeOut" },
  fontSize: isActive
    ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    : { duration: 0.4, delay: 0.6, ease: "easeOut" },
  marginTop: isActive
    ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    : { duration: 0.4, delay: 0.6, ease: "easeOut" },
});
