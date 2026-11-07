import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import TaskRow from "@/components/tasks/task-row";
import type { Task } from "@/types/domain";

type TaskSectionProps = {
  title: string;
  description?: string;
  tasks: Task[];
};

export default function TaskSection({
  title,
  description,
  tasks,
}: TaskSectionProps) {
  return (
    <section aria-label={title}>
      <Card>
        {/* Section heading */}
        <div className="mb-4">
          <SectionHeader title={title} description={description} />
        </div>

        {/* Task list */}
        {tasks.length === 0 ? (
          <p className="py-3 text-sm text-gray-500">
            No tasks in this section.
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
}
