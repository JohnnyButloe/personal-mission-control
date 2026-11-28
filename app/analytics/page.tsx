import PageHeader from "@/components/page-header";
import WeeklyFocus from "@/components/analytics/weekly-focus";
import GoalFocus from "@/components/analytics/goal-focus";
import AnalyticsStreak from "@/components/analytics/analytics-streak";
import { analyticsSummary, dashboardSummary, goals } from "@/data/mock-data";

export default function AnalyticsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <PageHeader
        title="Analytics"
        description="Review your focus activity and consistency."
      />

      <WeeklyFocus dailyFocus={analyticsSummary.dailyFocus} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <GoalFocus focusByGoal={analyticsSummary.focusByGoal} goals={goals} />

        <AnalyticsStreak
          currentStreakDays={dashboardSummary.currentStreakDays}
          longestStreakDays={analyticsSummary.longestStreakDays}
        />
      </div>
    </div>
  );
}
