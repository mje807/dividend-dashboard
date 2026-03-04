import type { ReactNode } from "react";
import { useMotionPreset } from "~/design/useMotionPreset";
import type { MotionPresetName } from "~/design/motion-presets";

export function StatCard({
  label,
  value,
  sub,
  icon,
  motionPreset = "surface-enter",
  motionDisabled = false,
}: {
  label: string;
  value: string;
  sub?: ReactNode;
  icon?: ReactNode;
  motionPreset?: MotionPresetName;
  motionDisabled?: boolean;
}) {
  const motion = useMotionPreset(motionPreset, motionDisabled);

  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800" style={motion.style} data-motion={motion.dataMotion}>
      <div className="flex items-center gap-2 mb-2">
        {icon ? <span>{icon}</span> : null}
        <div className="text-xs text-gray-500">{label}</div>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
      {sub ? <div className="text-xs text-gray-400 mt-1">{sub}</div> : null}
    </div>
  );
}
