import Link from "next/link";
import { DesignChrome } from "@/components/design-chrome";
import { memberScreens } from "@/lib/nav";

export default function MemberIndexPage() {
  const sections = [...new Set(memberScreens.map((s) => s.section))];
  return (
    <DesignChrome
      title="Member mobile application"
      subtitle="Every major member benefit has a dedicated screen. Start with Welcome for the claim journey, or jump to Home for the logged-in hub."
    >
      <div className="mb-6 flex flex-wrap gap-3">
        <Link
          href="/prototype/member/welcome"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Start: Welcome
        </Link>
        <Link
          href="/prototype/member/home"
          className="rounded-lg border bg-card px-4 py-2 text-sm font-medium"
        >
          Jump to Home
        </Link>
      </div>
      {sections.map((section) => (
        <div key={section} className="mb-8">
          <h2 className="mb-3 font-display text-lg font-semibold">{section}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {memberScreens
              .filter((s) => s.section === section)
              .map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-xl border bg-card p-4 shadow-sm transition hover:border-primary/40"
                >
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </DesignChrome>
  );
}
