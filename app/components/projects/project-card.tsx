import Card from "@/components/ui/card";
import ProgressBar from "@/components/ui/progress-bar";
import type { Project } from "@/types/domain";

type ProjectCardProps = {
  project: Project;
  goalTitle: string;
  completedTaskCount: number;
  totalTaskCount: number;
  lastWorkedLabel: string;
};

export default function ProjectCard({
  project,
  goalTitle,
  completedTaskCount,
  totalTaskCount,
  lastWorkedLabel,
}: ProjectCardProps) {
  return (
    <Card>
      {/* Project information */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{project.title}</h2>

        <p className="mt-2 text-sm text-gray-600">Goal: {goalTitle}</p>
      </div>

      {/* Project progress */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Progress
          </span>

          <span className="text-sm font-semibold text-gray-900">
            {project.progress}%
          </span>
        </div>

        <ProgressBar
          value={project.progress}
          label={`${project.title} progress`}
        />
      </div>

      {/* Project activity */}
      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
        <div>
          <p className="text-lg font-semibold text-gray-900">
            {completedTaskCount} / {totalTaskCount}
          </p>

          <p className="text-xs text-gray-600">Tasks completed</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900">{lastWorkedLabel}</p>

          <p className="mt-1 text-xs text-gray-600">Last worked</p>
        </div>
      </div>
    </Card>
  );
}
