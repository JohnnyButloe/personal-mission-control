import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import type { GoalFocus } from "@/types/analytics";
import type { Goal } from "@/types/domain";

type GoalFocusProps = {
  focusByGoal: GoalFocus[];
  goals: Goal[];
};

export default function GoalFocus({ focusByGoal, goals }: GoalFocusProps) {
  return (
    <section aria-label="Focus by goal">
      <SectionHeader title="By Goal" />

      <Card className="mt-4">
        {focusByGoal.length === 0 ? (
          <p className="text-sm text-gray-600">No focus activity recorded.</p>
        ) : (
          <div className="space-y-4">
            {focusByGoal.map((entry) => {
              const goal = goals.find((goal) => goal.id === entry.goalId);

              const hours = Math.floor(entry.minutes / 60);
              const minutes = entry.minutes % 60;

              const formattedTime =
                hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

              return (
                <div key={entry.goalId}>
                  <p className="text-sm text-gray-600">
                    {goal?.title ?? "Unknown Goal"}
                  </p>

                  <p className="mt-1 text-xl font-semibold text-gray-900">
                    {formattedTime}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </section>
  );
}
