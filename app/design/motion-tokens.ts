export const motionTokens = {
  duration: {
    instant: 0,
    fast: 120,
    base: 180,
    slow: 280,
    emphasis: 420,
  },
  easing: {
    standard: "cubic-bezier(0.2, 0, 0, 1)",
    enter: "cubic-bezier(0.0, 0, 0.2, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
    emphasis: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  distance: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  stagger: {
    fast: 20,
    base: 40,
    slow: 70,
  },
} as const;

export type MotionTokenSet = typeof motionTokens;
