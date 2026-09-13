import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { notifications } from "@/lib/demo-data";

export default function NotificationsPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader
        title="Notifications"
        backHref="/prototype/member/home"
        action={<Button variant="ghost" size="sm">Mark all read</Button>}
      />
      {notifications.length === 0 ? (
        <p className="rounded-xl border border-dashed p-10 text-center text-sm text-muted-foreground">You're all caught up</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((n) => (
            <li key={n.id} className={`rounded-xl border p-3 ${n.unread ? "bg-primary/5 border-primary/20" : "bg-card"}`}>
              <div className="flex justify-between gap-2">
                <p className="text-xs font-medium text-teal">{n.category}</p>
                <span className="text-xs text-muted-foreground">{n.time}</span>
              </div>
              <p className={`mt-1 text-sm ${n.unread ? "font-medium" : ""}`}>{n.title}</p>
            </li>
          ))}
        </ul>
      )}
      <Button className="mt-4 w-full" variant="outline">Notification preferences</Button>
    </ScreenScroll>
  );
}
