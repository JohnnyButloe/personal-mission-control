import MetricCard from "@/components/ui/metric-card";

type FocusSummaryProps = {
  focusMinutes: number;
};

export default function FocusSummary({ focusMinutes }: FocusSummaryProps) {
  const hours = Math.floor(focusMinutes / 60);
  const minutes = focusMinutes % 60;

  const formattedDuration = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  return <MetricCard label="Deep Work Today" value={formattedDuration} />;
}
