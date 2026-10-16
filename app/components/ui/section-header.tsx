import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export default function SectionHeader({
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      {description && (
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      )}

      {action && <div>{action}</div>}
    </div>
  );
}
