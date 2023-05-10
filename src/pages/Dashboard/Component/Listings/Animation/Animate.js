export const boxVariant = {
  visible: {
    opacity: 1,
    position: "relative",
    right: "0px",
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, position: "relative", right: `${-500}px` },
};


export const bannerVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};