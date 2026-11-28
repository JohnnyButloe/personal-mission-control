"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/components/navigation-items";

export default function MobileNavigation() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const primaryLinks = navigationItems.filter((link) => link.mobilePrimary);

  const secondaryLinks = navigationItems.filter((link) => !link.mobilePrimary);

  return (
    <>
      {/* Mobile header */}
      <header className="relative z-20 flex items-center justify-between border-b border-gray-200 px-4 py-3 md:hidden">
        <p className="text-sm font-semibold text-gray-900">Mission Control</p>

        <div className="relative">
          <button
            type="button"
            aria-expanded={moreOpen}
            aria-controls="mobile-more-pages"
            onClick={() => setMoreOpen((open) => !open)}
            className="rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            More
          </button>

          {moreOpen && (
            <nav
              id="mobile-more-pages"
              aria-label="More pages"
              className="absolute right-0 top-full z-30 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-2 shadow-lg"
            >
              {secondaryLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMoreOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm ${
                      isActive
                        ? "bg-gray-100 font-semibold text-gray-900"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Primary mobile navigation */}
      <nav
        aria-label="Primary mobile navigation"
        className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <ul className="grid grid-cols-4">
          {primaryLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMoreOpen(false)}
                  className={`flex min-h-14 items-center justify-center px-1 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
