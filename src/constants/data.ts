import { NavItem } from "@/types";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

export const navItems: NavItem[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    isActive: true,
    items: [
      {
        title: "Inbox",
        url: "#",
        icon: Inbox,
      },
      {
        title: "Calendar",
        url: "#",
        icon: Calendar,
      },
      {
        title: "Search",
        url: "#",
        icon: Search,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
    ],
  },
];
