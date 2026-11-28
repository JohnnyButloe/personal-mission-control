import ProjectCard from "@/components/dashboard/project-card";
import SectionHeader from "@/components/ui/section-header";
import type { Project } from "@/types/domain";

type ActiveProjectsProps = {
  projects: Project[];
};

export default function ActiveProjects({ projects }: ActiveProjectsProps) {
  const activeProjects = projects.filter(
    (project) => project.status === "active",
  );

  return (
    <section className="mt-8" aria-label="Active projects">
      <SectionHeader title="Active Projects" />

      {activeProjects.length === 0 ? (
        <p className="mt-4 text-sm text-gray-600">No active projects yet.</p>
      ) : (
        <div className="mt-4 grid gap-4">
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
