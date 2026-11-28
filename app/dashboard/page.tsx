import TodaysMission from "@/components/dashboard/todays-mission";
import PageHeader from "@/components/page-header";
import { dashboardSummary, projects, tasks } from "@/data/mock-data";
import FocusSummary from "@/components/dashboard/focus-summary";
import StreakCard from "@/components/dashboard/streak-card";
import ActiveProjects from "@/components/dashboard/active-projects";
import WeeklySummary from "@/components/dashboard/weekly-summary";

export default function DashboardPage() {
  const missionTask = tasks.find(
    (task) => task.id === "task-learn-architecture",
  );

  if (!missionTask) {
    throw new Error("Dashboard mission task was not found.");
  }

  const missionProject = projects.find(
    (project) => project.id === missionTask.projectId,
  );

  if (!missionProject) {
    throw new Error("Dashboard mission project was not found.");
  }

  return (
    <>
      <div>
        <PageHeader
          title="Dashboard"
          description="Your Mission Control overview."
        />

        <TodaysMission task={missionTask} project={missionProject} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <FocusSummary focusMinutes={dashboardSummary.focusMinutesToday} />
        <StreakCard streakDays={dashboardSummary.currentStreakDays} />
      </div>
      <div>
        <ActiveProjects projects={projects} />

        <WeeklySummary summary={dashboardSummary} />
      </div>
    </>
  );
}
