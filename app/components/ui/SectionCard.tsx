import type { ReactNode } from "react";

export function SectionCard({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`bg-gray-900 rounded-xl border border-gray-800 p-4 ${className}`}>
      {title ? <h2 className="text-sm font-semibold mb-3">{title}</h2> : null}
      {children}
    </section>
  );
}
