import { connection } from "next/server";

import PageHeader from "@/components/page-header";
import GoalCard from "@/components/goals/goal-card";
import { goals, projects, tasks, focusSessions } from "@/data/mock-data";

export default async function GoalsPage() {
  await connection();

  const now = new Date();

  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();

  const monthStart = new Date(Date.UTC(year, month, 1));
  const nextMonthStart = new Date(Date.UTC(year, month + 1, 1));

  const sessionsThisMonth = focusSessions.filter((session) => {
    const completedAt = new Date(session.completedAt);

    return completedAt >= monthStart && completedAt < nextMonthStart;
  });

  return (
    <section aria-label="Goals">
      <PageHeader
        title="Goals"
        description="Define and track long-term objectives."
      />

      {goals.length === 0 ? (
        <p className="text-sm text-gray-600">No goals yet.</p>
      ) : (
        <div className="grid gap-4">
          {goals.map((goal) => {
            const activeProjectCount = projects.filter(
              (project) =>
                project.goalId === goal.id && project.status === "active",
            ).length;

            const focusMinutesThisMonth = sessionsThisMonth.reduce(
              (totalMinutes, session) => {
                const task = tasks.find((task) => task.id === session.taskId);

                if (!task) {
                  return totalMinutes;
                }

                const project = projects.find(
                  (project) => project.id === task.projectId,
                );

                if (project?.goalId !== goal.id) {
                  return totalMinutes;
                }

                return totalMinutes + session.durationMinutes;
              },
              0,
            );

            return (
              <GoalCard
                key={goal.id}
                goal={goal}
                activeProjectCount={activeProjectCount}
                focusMinutesThisMonth={focusMinutesThisMonth}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
