import PageHeader from "@/components/page-header";
import ProjectCard from "@/components/projects/project-card";
import { goals, projects, tasks, focusSessions } from "@/data/mock-data";

export default function ProjectsPage() {
  const activeProjects = projects.filter(
    (project) => project.status === "active",
  );

  return (
    <section aria-label="Projects" className="mx-auto w-full max-w-4xl">
      <PageHeader
        title="Projects"
        description="Organize the work that moves your goals forward."
      />

      {activeProjects.length === 0 ? (
        <p className="text-sm text-gray-600">No active projects yet.</p>
      ) : (
        <div className="grid gap-4">
          {activeProjects.map((project) => {
            const parentGoal = goals.find((goal) => goal.id === project.goalId);

            const projectTasks = tasks.filter(
              (task) => task.projectId === project.id,
            );

            const totalTaskCount = projectTasks.length;

            const completedTaskCount = projectTasks.filter(
              (task) => task.completed,
            ).length;

            const projectSessions = focusSessions.filter((session) =>
              projectTasks.some((task) => task.id === session.taskId),
            );

            const lastWorkedAt = projectSessions.reduce<Date | null>(
              (latest, session) => {
                const completedAt = new Date(session.completedAt);

                if (
                  latest === null ||
                  completedAt.getTime() > latest.getTime()
                ) {
                  return completedAt;
                }

                return latest;
              },
              null,
            );

            const lastWorkedLabel = lastWorkedAt
              ? lastWorkedAt.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })
              : "Never";

            return (
              <ProjectCard
                key={project.id}
                project={project}
                goalTitle={parentGoal?.title ?? "Unassigned goal"}
                completedTaskCount={completedTaskCount}
                totalTaskCount={totalTaskCount}
                lastWorkedLabel={lastWorkedLabel}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
