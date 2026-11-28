import NavLinks from "@/components/nav-links";

export default function Sidebar() {
  return (
    <aside className="w-full border-b p-4 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Mission Control</h2>
      </div>

      <NavLinks />
    </aside>
  );
}
