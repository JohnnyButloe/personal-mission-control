import Link from "next/link";

import Card from "@/components/ui/card";
import type { Project, Task } from "@/types/domain";

type TodaysMissionProps = {
  project: Project;
  task: Task;
};

export default function TodaysMission({ project, task }: TodaysMissionProps) {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        Today&apos;s Mission
      </p>

      <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {project.title}
          </h2>

          <p className="mt-1 text-sm text-gray-600">{task.title}</p>
        </div>

        <Link
          href="/focus"
          className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          🔒 Lock In
        </Link>
      </div>
    </Card>
  );
}
