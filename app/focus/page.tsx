import LockInScreen from "@/components/focus/lock-in-screen";
import { projects, tasks } from "@/data/mock-data";

export default function FocusPage() {
  const focusTask = tasks.find((task) => task.id === "task-learn-architecture");

  if (!focusTask) {
    throw new Error("Focus task was not found.");
  }

  const focusProject = projects.find(
    (project) => project.id === focusTask.projectId,
  );

  if (!focusProject) {
    throw new Error("Focus project was not found.");
  }

  return <LockInScreen project={focusProject} task={focusTask} />;
}
