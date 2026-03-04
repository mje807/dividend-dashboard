import { motionTokens } from "~/design/motion-tokens";

export type MotionPresetName =
  | "none"
  | "surface-enter"
  | "list-item-enter"
  | "dialog-enter"
  | "dialog-exit"
  | "page-soft";

export type MotionPreset = {
  initial?: Record<string, string | number>;
  animate?: Record<string, string | number>;
  exit?: Record<string, string | number>;
  transition?: {
    duration: number;
    easing: string;
    delayMs?: number;
    staggerMs?: number;
  };
};

const t = motionTokens;

export const motionPresets: Record<MotionPresetName, MotionPreset> = {
  none: {},
  "surface-enter": {
    initial: { opacity: 0, transform: `translateY(${t.distance.md}px)` },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: t.duration.base, easing: t.easing.enter },
  },
  "list-item-enter": {
    initial: { opacity: 0, transform: `translateY(${t.distance.sm}px)` },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: {
      duration: t.duration.fast,
      easing: t.easing.standard,
      staggerMs: t.stagger.base,
    },
  },
  "dialog-enter": {
    initial: { opacity: 0, transform: "scale(0.98)" },
    animate: { opacity: 1, transform: "scale(1)" },
    transition: { duration: t.duration.base, easing: t.easing.enter },
  },
  "dialog-exit": {
    exit: { opacity: 0, transform: "scale(0.98)" },
    transition: { duration: t.duration.fast, easing: t.easing.exit },
  },
  "page-soft": {
    initial: { opacity: 0, transform: `translateY(${t.distance.sm}px)` },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: t.duration.slow, easing: t.easing.standard },
  },
};

export function getMotionPreset(name: MotionPresetName): MotionPreset {
  return motionPresets[name] ?? motionPresets.none;
}
