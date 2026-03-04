import type { ReactNode } from "react";
import { useMotionPreset } from "~/design/useMotionPreset";
import type { MotionPresetName } from "~/design/motion-presets";

export function SectionCard({
  title,
  children,
  className = "",
  motionPreset = "surface-enter",
  motionDisabled = false,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  motionPreset?: MotionPresetName;
  motionDisabled?: boolean;
}) {
  const motion = useMotionPreset(motionPreset, motionDisabled);

  return (
    <section className={`bg-gray-900 rounded-xl border border-gray-800 p-4 ${className}`} style={motion.style} data-motion={motion.dataMotion}>
      {title ? <h2 className="text-sm font-semibold mb-3">{title}</h2> : null}
      {children}
    </section>
  );
}
