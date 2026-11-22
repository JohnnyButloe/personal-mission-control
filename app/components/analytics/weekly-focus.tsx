import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import type { DailyFocus } from "@/types/analytics";

type WeeklyFocusProps = {
  dailyFocus: DailyFocus[];
};

export default function WeeklyFocus({ dailyFocus }: WeeklyFocusProps) {
  const maxMinutes = Math.max(1, ...dailyFocus.map((day) => day.minutes));

  return (
    <section aria-label="Weekly focus">
      <SectionHeader title="This Week" />

      <Card className="mt-4">
        <h3 className="mb-4 text-sm font-medium text-gray-900">Deep Work</h3>

        {dailyFocus.length === 0 ? (
          <p className="text-sm text-gray-600">No focus activity recorded.</p>
        ) : (
          <div className="space-y-4">
            {dailyFocus.map((day) => {
              const percentage = (day.minutes / maxMinutes) * 100;

              return (
                <div key={day.day} className="flex items-center gap-3">
                  <span className="w-10 shrink-0 text-sm text-gray-600">
                    {day.day}
                  </span>

                  <div
                    className="h-3 flex-1 overflow-hidden rounded-full bg-gray-100"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <span className="w-12 shrink-0 text-right text-sm tabular-nums text-gray-700">
                    {day.minutes}m
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </section>
  );
}
