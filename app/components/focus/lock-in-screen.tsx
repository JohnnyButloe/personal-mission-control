import Link from "next/link";

import ProgressBar from "@/components/ui/progress-bar";
import type { Project, Task } from "@/types/domain";

type LockInScreenProps = {
  project: Project;
  task: Task;
};

export default function LockInScreen({ project, task }: LockInScreenProps) {
  return (
    <section
      aria-labelledby="focus-heading"
      className="mx-auto flex min-h-[75vh] w-full max-w-4xl items-center justify-center"
    >
      <div className="w-full rounded-3xl bg-gray-950 px-5 py-14 text-center text-white shadow-lg sm:px-12 sm:py-20">
        <div className="mx-auto max-w-xl">
          {/* Focus state */}
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">
            Focus Mode
          </p>

          <h1
            id="focus-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Locked In <span aria-hidden="true">🔒</span>
          </h1>

          {/* Selected work */}
          <div className="mt-10">
            <p className="text-sm font-medium text-gray-400">{project.title}</p>

            <h2 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
              {task.title}
            </h2>
          </div>

          {/* Static session timer */}
          <div className="mt-12 sm:mt-16">
            <p
              aria-label="Static timer preview: 45 minutes"
              className="font-mono text-6xl font-semibold tabular-nums tracking-tight sm:text-8xl"
            >
              45:00
            </p>

            <div className="mx-auto mt-8 max-w-sm opacity-60">
              <ProgressBar
                value={0}
                label="Session progress (static prototype)"
              />
            </div>
          </div>

          {/* Prototype session exit */}
          <Link
            href="/dashboard"
            className="mt-12 inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            End Session
          </Link>

          {/* Supporting message */}
          <p className="mt-8 text-sm text-gray-300">
            Everything else can wait.
          </p>

          <p className="mt-3 text-xs text-gray-400">
            Prototype only — no time is tracked or saved.
          </p>
        </div>
      </div>
    </section>
  );
}
