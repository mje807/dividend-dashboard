import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { getMotionPreset, type MotionPresetName } from "~/design/motion-presets";
import { useReducedMotion, reduceMotionDuration } from "~/design/useReducedMotion";

export function useMotionPreset(name: MotionPresetName = "none", motionDisabled = false) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const preset = getMotionPreset(name);

  const style = useMemo<CSSProperties>(() => {
    if (motionDisabled || name === "none") return {};

    const duration = reduceMotionDuration(preset.transition?.duration ?? 0, reduced);
    const easing = preset.transition?.easing ?? "ease";

    const base: CSSProperties = {
      transition: `all ${duration}ms ${easing}`,
      willChange: "opacity, transform",
    };

    const from = (preset.initial ?? {}) as CSSProperties;
    const to = (preset.animate ?? {}) as CSSProperties;

    return mounted ? { ...base, ...to } : { ...base, ...from };
  }, [motionDisabled, name, preset, reduced, mounted]);

  return {
    style,
    dataMotion: name,
  };
}
