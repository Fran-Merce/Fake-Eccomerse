export const arrowVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      repeat: Infinity,
      repeatDelay: 0.3,
      repeatType: 'reverse',
    },
  },
};
