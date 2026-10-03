type ProgressBarProps = {
  value: number;
  max?: number;
  label?: string;
};

export default function ProgressBar({
  value,
  max = 100,
  label = "Progress",
}: ProgressBarProps) {
  const safeMax = max > 0 ? max : 100;
  const clampedValue = Math.min(Math.max(value, 0), safeMax);
  const percentage = (clampedValue / safeMax) * 100;

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={clampedValue}
      className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
    >
      <div
        className="h-full rounded-full bg-gray-900"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
