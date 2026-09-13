"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Gift,
  Home,
  User,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/prototype/member/home", icon: Home },
  { label: "Discover", href: "/prototype/member/discover", icon: Users },
  { label: "Events", href: "/prototype/member/events", icon: Calendar },
  { label: "Benefits", href: "/prototype/member/benefits", icon: Gift },
  { label: "Profile", href: "/prototype/member/profile", icon: User },
];

export function MemberBottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="sticky bottom-0 z-40 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
      aria-label="Primary"
    >
      <ul className="grid grid-cols-5">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className={cn("size-5", active && "stroke-[2.25]")} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
