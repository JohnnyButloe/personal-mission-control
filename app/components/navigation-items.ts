export type NavigationItem = {
  name: string;
  href: string;
  mobilePrimary: boolean;
};

export const navigationItems: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    mobilePrimary: true,
  },
  {
    name: "Goals",
    href: "/goals",
    mobilePrimary: true,
  },
  {
    name: "Projects",
    href: "/projects",
    mobilePrimary: true,
  },
  {
    name: "Tasks",
    href: "/tasks",
    mobilePrimary: false,
  },
  {
    name: "Focus",
    href: "/focus",
    mobilePrimary: true,
  },
  {
    name: "Analytics",
    href: "/analytics",
    mobilePrimary: false,
  },
];
