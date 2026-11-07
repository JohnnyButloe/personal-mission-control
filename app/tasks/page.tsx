import PageHeader from "@/components/page-header";
import TaskSection from "@/components/tasks/task-section";
import { tasks } from "@/data/mock-data";

export default function TasksPage() {
  // Tasks intentionally selected for today
  const todayTasks = tasks.filter(
    (task) => !task.completed && task.planningBucket === "today",
  );

  // Incomplete tasks reserved for later
  const upcomingTasks = tasks.filter(
    (task) => !task.completed && task.planningBucket === "upcoming",
  );

  return (
    <section aria-label="Tasks" className="mx-auto w-full max-w-4xl">
      <PageHeader
        title="Tasks"
        description="Manage the next actions that need your attention."
      />

      <div className="grid gap-4">
        <TaskSection title="Today" tasks={todayTasks} />

        <TaskSection title="Upcoming" tasks={upcomingTasks} />
      </div>
    </section>
  );
}
