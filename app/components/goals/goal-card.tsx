import Card from "@/components/ui/card";
import ProgressBar from "@/components/ui/progress-bar";
import type { Goal } from "@/types/domain";

type GoalCardProps = {
  goal: Goal;
  activeProjectCount: number;
  focusMinutesThisMonth: number;
};

export default function GoalCard({
  goal,
  activeProjectCount,
  focusMinutesThisMonth,
}: GoalCardProps) {
  const focusedHours = Math.round((focusMinutesThisMonth / 60) * 10) / 10;

  return (
    <Card>
      {/* Goal information */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{goal.title}</h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {goal.description}
        </p>
      </div>

      {/* Goal progress */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Progress
          </span>

          <span className="text-sm font-semibold text-gray-900">
            {goal.progress}%
          </span>
        </div>

        <ProgressBar value={goal.progress} label={`${goal.title} progress`} />
      </div>

      {/* Goal activity */}
      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
        <div>
          <p className="text-lg font-semibold text-gray-900">
            {activeProjectCount}
          </p>

          <p className="text-xs text-gray-600">
            Active {activeProjectCount === 1 ? "project" : "projects"}
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-900">{focusedHours}h</p>

          <p className="text-xs text-gray-600">Focused this month</p>
        </div>
      </div>
    </Card>
  );
}
