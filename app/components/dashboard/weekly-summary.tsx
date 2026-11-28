import MetricCard from "@/components/ui/metric-card";
import SectionHeader from "@/components/ui/section-header";
import type { DashboardSummary } from "@/types/dashboard";

type WeeklySummaryProps = {
  summary: DashboardSummary;
};

export default function WeeklySummary({ summary }: WeeklySummaryProps) {
  const hours = Math.floor(summary.focusMinutesThisWeek / 60);
  const minutes = summary.focusMinutesThisWeek % 60;

  const formattedFocusTime =
    hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  return (
    <section className="mt-8" aria-label="Weekly summary">
      <SectionHeader
        title="This Week"
        description="A snapshot of your recent progress."
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Deep Work" value={formattedFocusTime} />

        <MetricCard label="Sessions" value={summary.sessionsThisWeek} />

        <MetricCard label="Tasks" value={summary.tasksCompletedThisWeek} />

        <MetricCard
          label="Goals Advanced"
          value={summary.goalsAdvancedThisWeek}
        />
      </div>
    </section>
  );
}
