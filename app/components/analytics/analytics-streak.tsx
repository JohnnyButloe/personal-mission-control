import MetricCard from "@/components/ui/metric-card";
import SectionHeader from "@/components/ui/section-header";

type AnalyticsStreakProps = {
  currentStreakDays: number;
  longestStreakDays: number;
};

export default function AnalyticsStreak({
  currentStreakDays,
  longestStreakDays,
}: AnalyticsStreakProps) {
  const dayLabel = currentStreakDays === 1 ? "day" : "days";

  const formattedCurrentStreak =
    currentStreakDays > 0
      ? `🔥 ${currentStreakDays} ${dayLabel}`
      : `${currentStreakDays} ${dayLabel}`;

  return (
    <section aria-label="Focus streak">
      <SectionHeader title="Streak" />

      <div className="mt-4">
        <MetricCard
          label="Current Streak"
          value={formattedCurrentStreak}
          detail={`Longest streak: ${longestStreakDays} days`}
        />
      </div>
    </section>
  );
}
