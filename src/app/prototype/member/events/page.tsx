import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { MemberBottomNav } from "@/components/prototype/member-bottom-nav";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { StatusBadge } from "@/components/status-badge";
import { Input } from "@/components/ui/input";
import { events } from "@/lib/demo-data";

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status !== "Attended");
  return (
    <>
      <ScreenScroll withNav className="pt-1">
        <ScreenHeader title="Events & activities" action={<Link href="/prototype/member/my-events" className="text-xs font-medium text-primary">My events</Link>} />
        <Input placeholder="Search events" className="mb-3" />
        <div className="mb-4 flex gap-2 overflow-x-auto text-xs">
          {["All", "Workshop", "Networking", "Career", "Community"].map((c) => (
            <button key={c} type="button" className="shrink-0 rounded-full border bg-card px-3 py-1.5">{c}</button>
          ))}
        </div>
        <h2 className="mb-2 text-sm font-semibold text-muted-foreground">Featured</h2>
        <div className="mb-5 space-y-2">
          {upcoming.filter((e) => e.featured).map((e) => (
            <Link key={e.id} href="/prototype/member/events/detail" className="block rounded-2xl border bg-card p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-teal">{e.category}</span>
                <StatusBadge status={e.status} />
              </div>
              <p className="font-display font-semibold">{e.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{e.date} · {e.time}</p>
              <p className="text-xs text-muted-foreground">{e.venue} · {e.seats}</p>
            </Link>
          ))}
        </div>
        <h2 className="mb-2 text-sm font-semibold text-muted-foreground">Upcoming</h2>
        <div className="space-y-2">
          {upcoming.map((e) => (
            <Link key={e.id} href="/prototype/member/events/detail" className="block rounded-xl border bg-card p-3">
              <p className="font-medium">{e.title}</p>
              <p className="text-xs text-muted-foreground">{e.date} · {e.organizer}</p>
            </Link>
          ))}
        </div>
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}
