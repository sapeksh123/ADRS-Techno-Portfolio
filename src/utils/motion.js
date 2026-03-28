export const viewportOnce = { once: true, amount: 0.25 };

export const fadeUp = (delay = 0, distance = 24) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  viewport: viewportOnce,
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut", delay },
  viewport: viewportOnce,
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.45, ease: "easeOut", delay },
  viewport: viewportOnce,
});

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35, ease: "easeOut" },
};
