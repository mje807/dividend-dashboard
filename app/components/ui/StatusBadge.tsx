import { useMotionPreset } from "~/design/useMotionPreset";
import type { MotionPresetName } from "~/design/motion-presets";

export function StatusBadge({
  label,
  tone = "neutral",
  motionPreset = "none",
  motionDisabled = false,
}: {
  label: string;
  tone?: "success" | "warn" | "danger" | "info" | "neutral";
  motionPreset?: MotionPresetName;
  motionDisabled?: boolean;
}) {
  const motion = useMotionPreset(motionPreset, motionDisabled);

  const cls =
    tone === "success"
      ? "bg-emerald-900/30 text-emerald-300 border-emerald-700/40"
      : tone === "warn"
        ? "bg-yellow-900/30 text-yellow-300 border-yellow-700/40"
        : tone === "danger"
          ? "bg-red-900/30 text-red-300 border-red-700/40"
          : tone === "info"
            ? "bg-indigo-900/30 text-indigo-300 border-indigo-700/40"
            : "bg-gray-800 text-gray-300 border-gray-700/40";

  return (
    <span className={`text-[11px] px-2 py-1 rounded-full border ${cls}`} style={motion.style} data-motion={motion.dataMotion}>
      {label}
    </span>
  );
}
