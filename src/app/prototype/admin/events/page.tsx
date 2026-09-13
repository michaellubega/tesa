import { AdminShell } from "@/components/prototype/admin-shell";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/demo-data";

export default function AdminEventsPage() {
  return (
    <AdminShell current="/prototype/admin/events" title="Event management" actions={<Button size="sm">Create event</Button>}>
      <div className="space-y-3">
        {events.map((e) => (
          <div key={e.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-background p-4">
            <div>
              <p className="font-semibold">{e.title}</p>
              <p className="text-sm text-muted-foreground">{e.date} · {e.venue} · {e.organizer}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Registrations</Button>
              <Button size="sm" variant="outline">Check-in QR</Button>
              <Button size="sm" variant="ghost">Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
