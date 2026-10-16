import Card from "@/components/ui/card";
import ProgressBar from "@/components/ui/progress-bar";
import type { Project } from "@/types/domain";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold text-gray-900">
          {project.title}
        </h3>

        <span className="shrink-0 text-sm font-medium text-gray-600">
          {project.progress}%
        </span>
      </div>

      <ProgressBar
        value={project.progress}
        label={`${project.title} progress`}
      />
    </Card>
  );
}
