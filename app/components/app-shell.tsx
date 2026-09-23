import Sidebar from "@/components/sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
