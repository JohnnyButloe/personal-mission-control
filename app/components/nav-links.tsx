"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Goals", href: "/goals" },
  { name: "Projects", href: "/projects" },
  { name: "Tasks", href: "/tasks" },
  { name: "Focus", href: "/focus" },
  { name: "Analytics", href: "/analytics" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-md px-3 py-2 text-sm ${
                  isActive ? "bg-gray-200 font-medium" : "hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
