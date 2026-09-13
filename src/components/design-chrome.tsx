import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ClubLogo } from "@/components/club-logo";
import { cn } from "@/lib/utils";

export function DesignChrome({
  children,
  title,
  subtitle,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="min-w-0">
            <ClubLogo size="sm" />
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["Design System", "/design-system"],
              ["Flows", "/flows"],
              ["Member", "/prototype/member"],
              ["Admin", "/prototype/admin"],
              ["QR States", "/prototype/qr-states"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      {(title || subtitle) && (
        <div className="border-b bg-surface/60">
          <div className="mx-auto max-w-7xl px-4 py-8">
            {title && (
              <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
      )}
      <main className={cn("mx-auto max-w-7xl px-4 py-8", className)}>{children}</main>
    </div>
  );
}

export function PrototypeAside({
  items,
  current,
}: {
  items: { title: string; href: string; section?: string }[];
  current?: string;
}) {
  let lastSection = "";
  return (
    <aside className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] space-y-1 overflow-y-auto pr-2 text-sm">
        {items.map((item) => {
          const showSection = item.section && item.section !== lastSection;
          if (item.section) lastSection = item.section;
          return (
            <div key={item.href}>
              {showSection && (
                <p className="mb-1 mt-4 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground first:mt-0">
                  {item.section}
                </p>
              )}
              <Link
                href={item.href}
                className={cn(
                  "block rounded-lg px-2 py-1.5 transition-colors",
                  current === item.href
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
