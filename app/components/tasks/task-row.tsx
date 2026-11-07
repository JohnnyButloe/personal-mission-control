import type { Task, TaskPriority } from "@/types/domain";

type TaskRowProps = {
  task: Task;
};

const priorityStyles: Record<TaskPriority, string> = {
  high: "bg-red-50 text-red-700",
  medium: "bg-amber-50 text-amber-700",
  low: "bg-gray-100 text-gray-700",
};

export default function TaskRow({ task }: TaskRowProps) {
  return (
    <li className="flex items-start gap-3 py-3">
      {/* Static completion indicator */}
      <span
        aria-hidden="true"
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${
          task.completed
            ? "border-green-600 bg-green-600 text-white"
            : "border-gray-400 bg-white"
        }`}
      >
        {task.completed ? "✓" : null}
      </span>

      {/* Task title */}
      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-medium ${
            task.completed ? "text-gray-500 line-through" : "text-gray-900"
          }`}
        >
          {task.title}
        </p>

        <span className="sr-only">
          {task.completed ? "Completed task" : "Incomplete task"}
        </span>
      </div>

      {/* Priority badge */}
      <span
        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold uppercase ${
          priorityStyles[task.priority]
        }`}
      >
        {task.priority}
      </span>
    </li>
  );
}
