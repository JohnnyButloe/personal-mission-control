export type DailyFocus = {
  day: string;
  minutes: number;
};

export type GoalFocus = {
  goalId: string;
  minutes: number;
};

export type AnalyticsSummary = {
  dailyFocus: DailyFocus[];
  focusByGoal: GoalFocus[];
  longestStreakDays: number;
};
