import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useMotionPreset } from "~/design/useMotionPreset";
import type { MotionPresetName } from "~/design/motion-presets";

export function PageHeader({
  title,
  subtitle,
  backHref,
  backLabel,
  updatedAt,
  motionPreset = "surface-enter",
  motionDisabled = false,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  updatedAt?: string;
  motionPreset?: MotionPresetName;
  motionDisabled?: boolean;
}) {
  const motion = useMotionPreset(motionPreset, motionDisabled);

  return (
    <>
      {backHref ? (
        <div className="flex items-center gap-4 mb-6">
          <Link to={backHref} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            <ArrowLeft size={16} />
            {backLabel ?? "뒤로"}
          </Link>
        </div>
      ) : null}

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-5" style={motion.style} data-motion={motion.dataMotion}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-white">{title}</h1>
            {subtitle ? <p className="text-gray-400 text-sm mt-1">{subtitle}</p> : null}
          </div>
          {updatedAt ? <div className="text-[11px] text-gray-500">{updatedAt}</div> : null}
        </div>
      </div>
    </>
  );
}
