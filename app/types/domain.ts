export type ProgressStatus = "active" | "completed" | "paused";
export type TaskPriority = "low" | "medium" | "high";
export type TaskStatus = "not-started" | "in-progress" | "completed";

export type Goal = {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: ProgressStatus;
};

export type Project = {
  id: string;
  goalId: string;
  title: string;
  description: string;
  progress: number;
  status: ProgressStatus;
};

export type Task = {
  id: string;
  projectId: string;
  title: string;
  completed: boolean;
  priority: TaskPriority;
  status: TaskStatus;
};

export type FocusSession = {
  id: string;
  taskId: string;
  durationMinutes: number;
  completedAt: string;
};
