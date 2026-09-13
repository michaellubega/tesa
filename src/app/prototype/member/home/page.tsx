import Link from "next/link";
import {
  Bell,
  ChevronRight,
  CreditCard,
  QrCode,
  Users,
  Calendar,
  Gift,
  Megaphone,
} from "lucide-react";
import { MemberBottomNav } from "@/components/prototype/member-bottom-nav";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { StatusBadge } from "@/components/status-badge";
import { Progress } from "@/components/ui/progress";
import { announcements, currentMember, events, members } from "@/lib/demo-data";

const quick = [
  { href: "/prototype/member/qr", label: "My QR", icon: QrCode },
  { href: "/prototype/member/profile", label: "Profile", icon: Users },
  { href: "/prototype/member/discover", label: "Discover", icon: Users },
  { href: "/prototype/member/events", label: "Events", icon: Calendar },
  { href: "/prototype/member/benefits", label: "Benefits", icon: Gift },
  { href: "/prototype/member/announcements", label: "News", icon: Megaphone },
];

export default function HomePage() {
  return (
    <>
      <ScreenScroll withNav className="pt-2">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Good afternoon</p>
            <h1 className="font-display text-2xl font-semibold">
              {currentMember.name.split(" ")[0]}
            </h1>
          </div>
          <Link
            href="/prototype/member/notifications"
            className="relative rounded-full border bg-card p-2"
            aria-label="Notifications"
          >
            <Bell className="size-5" />
            <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-destructive" />
          </Link>
        </div>

        <div className="mb-4 rounded-2xl border bg-card p-4">
          <div className="flex items-center justify-between text-sm">
            <span>Profile completion</span>
            <span className="font-medium">{currentMember.profileComplete}%</span>
          </div>
          <Progress value={currentMember.profileComplete} className="mt-2" />
          <div className="mt-3 flex items-center justify-between">
            <StatusBadge status="Active" />
            <Link href="/prototype/member/edit-profile" className="text-xs font-medium text-primary">
              Complete profile
            </Link>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2">
          <Link
            href="/prototype/member/card"
            className="flex items-center gap-2 rounded-xl border bg-primary p-3 text-primary-foreground"
          >
            <CreditCard className="size-5" />
            <span className="text-sm font-medium">Membership card</span>
          </Link>
          <Link
            href="/prototype/member/qr"
            className="flex items-center gap-2 rounded-xl border bg-card p-3"
          >
            <QrCode className="size-5 text-primary" />
            <span className="text-sm font-medium">Show QR</span>
          </Link>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Quick actions
        </p>
        <div className="mb-6 grid grid-cols-3 gap-2">
          {quick.map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className="flex flex-col items-center gap-1 rounded-xl border bg-card py-3 text-xs"
            >
              <q.icon className="size-4 text-primary" />
              {q.label}
            </Link>
          ))}
        </div>

        <Section title="Upcoming events" href="/prototype/member/events">
          {events.slice(0, 2).map((e) => (
            <Link
              key={e.id}
              href="/prototype/member/events/detail"
              className="block rounded-xl border bg-card p-3"
            >
              <p className="font-medium">{e.title}</p>
              <p className="text-xs text-muted-foreground">
                {e.date} · {e.venue}
              </p>
            </Link>
          ))}
        </Section>

        <Section title="Latest announcements" href="/prototype/member/announcements">
          {announcements.slice(0, 2).map((a) => (
            <div key={a.id} className="rounded-xl border bg-card p-3">
              <p className="font-medium">{a.title}</p>
              <p className="text-xs text-muted-foreground">{a.excerpt}</p>
            </div>
          ))}
        </Section>

        <Section title="Suggested connections" href="/prototype/member/discover">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {members.slice(0, 3).map((m) => (
              <Link
                key={m.id}
                href="/prototype/member/public-profile"
                className="min-w-[120px] rounded-xl border bg-card p-3 text-center"
              >
                <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  {m.photoInitials}
                </div>
                <p className="text-xs font-medium">{m.name.split(" ")[0]}</p>
                <p className="text-[10px] text-muted-foreground">{m.role}</p>
              </Link>
            ))}
          </div>
        </Section>
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}

function Section({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-display font-semibold">{title}</h2>
        <Link href={href} className="flex items-center text-xs text-primary">
          See all <ChevronRight className="size-3.5" />
        </Link>
      </div>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
