import { AdminShell } from "@/components/prototype/admin-shell";
import { Button } from "@/components/ui/button";
import { announcements } from "@/lib/demo-data";

export default function AdminAnnouncementsPage() {
  return (
    <AdminShell current="/prototype/admin/announcements" title="Announcements" actions={<Button size="sm">Create announcement</Button>}>
      <div className="space-y-3">
        {announcements.map((a) => (
          <div key={a.id} className="rounded-xl border bg-background p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">{a.title}</p>
              <span className="text-xs text-muted-foreground">{a.date}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{a.excerpt}</p>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline">Edit</Button>
              <Button size="sm" variant="ghost">Schedule</Button>
              <Button size="sm" variant="ghost">Archive</Button>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
