import MetricCard from "@/components/ui/metric-card";

type StreakCardProps = {
  streakDays: number;
};

export default function StreakCard({ streakDays }: StreakCardProps) {
  const dayLabel = streakDays === 1 ? "day" : "days";

  const formattedStreak =
    streakDays > 0
      ? `🔥 ${streakDays} ${dayLabel}`
      : `${streakDays} ${dayLabel}`;

  return <MetricCard label="Current Streak" value={formattedStreak} />;
}
