import type { ProgressStatus } from "@/types/domain";

type StatusBadgeProps = {
  status: ProgressStatus;
};

const statusStyles: Record<ProgressStatus, string> = {
  active: "bg-blue-50 text-blue-700",
  completed: "bg-green-50 text-green-700",
  paused: "bg-gray-100 text-gray-700",
};

const statusLabels: Record<ProgressStatus, string> = {
  active: "Active",
  completed: "Completed",
  paused: "Paused",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}
