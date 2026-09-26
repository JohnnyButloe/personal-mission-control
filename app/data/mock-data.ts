import type { FocusSession, Goal, Project, Task } from "@/types/domain";

export const goals: Goal[] = [
  {
    id: "goal-cloud-space-career",
    title: "Become competitive for Cloud / Space Infrastructure roles",
    description:
      "Build the software, cloud, infrastructure, and distributed systems skills needed for advanced engineering roles in the cloud and space industries.",
    progress: 25,
    status: "active",
  },
  {
    id: "goal-deep-work",
    title: "Build a consistent deep-work routine",
    description:
      "Create a repeatable system for focused learning and project work while tracking consistency over time.",
    progress: 40,
    status: "active",
  },
];

export const projects: Project[] = [
  {
    id: "project-mission-control",
    goalId: "goal-cloud-space-career",
    title: "Personal Mission Control",
    description:
      "Build a personal workflow dashboard for managing goals, projects, tasks, focus sessions, and productivity insights.",
    progress: 30,
    status: "active",
  },
  {
    id: "project-cloud-lab",
    goalId: "goal-cloud-space-career",
    title: "Cloud Infrastructure Lab",
    description:
      "Build hands-on cloud infrastructure exercises covering deployment, networking, containers, automation, and observability.",
    progress: 10,
    status: "active",
  },
  {
    id: "project-focus-system",
    goalId: "goal-deep-work",
    title: "Improve Focus Habits",
    description:
      "Experiment with focused work sessions and review patterns to improve consistency.",
    progress: 35,
    status: "active",
  },
];

export const tasks: Task[] = [
  {
    id: "task-development-roadmap",
    projectId: "project-mission-control",
    title: "Finish mapping out development plan",
    completed: true,
    priority: "high",
    status: "completed",
  },
  {
    id: "task-github-issues",
    projectId: "project-mission-control",
    title: "Input development issues into GitHub repository",
    completed: true,
    priority: "medium",
    status: "completed",
  },
  {
    id: "task-complete-phase-0",
    projectId: "project-mission-control",
    title: "Complete Phase 0 product definition",
    completed: true,
    priority: "high",
    status: "completed",
  },
  {
    id: "task-initialize-project",
    projectId: "project-mission-control",
    title: "Create project files and initialize Next.js application",
    completed: true,
    priority: "high",
    status: "in-progress",
  },
  {
    id: "task-learn-architecture",
    projectId: "project-mission-control",
    title: "Understand the code and concepts used throughout Phase 1",
    completed: false,
    priority: "high",
    status: "in-progress",
  },
  {
    id: "task-cloud-architecture",
    projectId: "project-cloud-lab",
    title: "Define the initial cloud lab architecture",
    completed: false,
    priority: "high",
    status: "not-started",
  },
  {
    id: "task-deployment-pipeline",
    projectId: "project-cloud-lab",
    title: "Build a basic CI/CD deployment pipeline",
    completed: false,
    priority: "medium",
    status: "not-started",
  },
  {
    id: "task-focus-review",
    projectId: "project-focus-system",
    title: "Review recent focus sessions and identify patterns",
    completed: false,
    priority: "medium",
    status: "not-started",
  },
];

export const focusSessions: FocusSession[] = [
  {
    id: "focus-001",
    taskId: "task-development-roadmap",
    durationMinutes: 45,
    completedAt: "2026-09-16T19:15:00.000Z",
  },
  {
    id: "focus-002",
    taskId: "task-complete-phase-0",
    durationMinutes: 60,
    completedAt: "2026-09-17T20:30:00.000Z",
  },
  {
    id: "focus-003",
    taskId: "task-initialize-project",
    durationMinutes: 50,
    completedAt: "2026-09-19T15:30:00.000Z",
  },
  {
    id: "focus-004",
    taskId: "task-learn-architecture",
    durationMinutes: 40,
    completedAt: "2026-09-23T22:00:00.000Z",
  },
  {
    id: "focus-005",
    taskId: "task-focus-review",
    durationMinutes: 30,
    completedAt: "2026-09-25T23:00:00.000Z",
  },
];
