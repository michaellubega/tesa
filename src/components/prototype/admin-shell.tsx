import Link from "next/link";
import {
  BarChart3,
  CreditCard,
  Gift,
  LayoutDashboard,
  Megaphone,
  QrCode,
  Settings,
  Shield,
  Users,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ClubLogo } from "@/components/club-logo";

const links = [
  { label: "Dashboard", href: "/prototype/admin", icon: LayoutDashboard },
  { label: "QR Codes", href: "/prototype/admin/qr", icon: QrCode },
  { label: "Cards", href: "/prototype/admin/cards", icon: CreditCard },
  { label: "Members", href: "/prototype/admin/members", icon: Users },
  { label: "Events", href: "/prototype/admin/events", icon: Calendar },
  { label: "Benefits", href: "/prototype/admin/benefits", icon: Gift },
  { label: "Announcements", href: "/prototype/admin/announcements", icon: Megaphone },
  { label: "Reports", href: "/prototype/admin/reports", icon: BarChart3 },
  { label: "Roles", href: "/prototype/admin/roles", icon: Shield },
  { label: "Settings", href: "/prototype/admin/settings", icon: Settings },
];

export function AdminSidebar({ current }: { current: string }) {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r bg-sidebar p-4">
      <ClubLogo size="sm" />
      <p className="mt-3 mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        Admin Console
      </p>
      <nav className="flex flex-1 flex-col gap-0.5">
        {links.map((link) => {
          const Icon = link.icon;
          const active = current === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent",
              )}
            >
              <Icon className="size-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function AdminShell({
  children,
  current,
  title,
  actions,
}: {
  children: React.ReactNode;
  current: string;
  title: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[720px] overflow-hidden rounded-2xl border bg-card shadow-sm">
      <AdminSidebar current={current} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b px-6 py-4">
          <h1 className="font-display text-xl font-semibold">{title}</h1>
          {actions}
        </header>
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
}
