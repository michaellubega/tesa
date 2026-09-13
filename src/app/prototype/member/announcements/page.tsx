import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { StatusBadge } from "@/components/status-badge";
import { announcements } from "@/lib/demo-data";

export default function AnnouncementsPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Announcements" backHref="/prototype/member/home" />
      <ul className="space-y-2">
        {announcements.map((a) => (
          <li key={a.id} className={`rounded-xl border bg-card p-4 ${a.unread ? "border-primary/30" : ""}`}>
            <div className="mb-1 flex items-center justify-between gap-2">
              <StatusBadge status={a.priority} />
              <span className="text-xs text-muted-foreground">{a.date}</span>
            </div>
            <p className="font-medium">{a.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{a.excerpt}</p>
            <p className="mt-2 text-xs text-muted-foreground">{a.author}{a.unread ? " · Unread" : ""}</p>
          </li>
        ))}
      </ul>
    </ScreenScroll>
  );
}
