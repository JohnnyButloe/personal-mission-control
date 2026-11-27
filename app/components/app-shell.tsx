import Sidebar from "@/components/sidebar";
import MobileNavigation from "@/components/mobile-navigation";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen md:flex">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main application area */}
      <div className="min-w-0 flex-1">
        <MobileNavigation />

        <main className="min-w-0 px-4 pt-6 pb-28 sm:px-6 md:py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
