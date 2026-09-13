import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { members } from "@/lib/demo-data";

const threads = [
  { member: members[0], preview: "Looking forward to the mixer!", time: "10m", unread: true },
  { member: members[1], preview: "Can you co-host the sprint?", time: "1h", unread: true },
  { member: members[3], preview: "Shared the brand guidelines.", time: "Yesterday", unread: false },
];

export default function MessagesPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Messages" backHref="/prototype/member/home" subtitle="Contact requests respect privacy settings" />
      <ul className="space-y-2">
        {threads.map((t) => (
          <li key={t.member.id} className="flex gap-3 rounded-xl border bg-card p-3">
            <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">{t.member.photoInitials}</div>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-2">
                <p className="font-medium">{t.member.name}</p>
                <span className="text-xs text-muted-foreground">{t.time}</span>
              </div>
              <p className={`truncate text-sm ${t.unread ? "font-medium" : "text-muted-foreground"}`}>{t.preview}</p>
            </div>
            {t.unread && <span className="mt-2 size-2 rounded-full bg-primary" />}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">Private emails and phones stay hidden unless a member opts in.</p>
    </ScreenScroll>
  );
}
