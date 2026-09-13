import { AdminShell } from "@/components/prototype/admin-shell";
import { Badge } from "@/components/ui/badge";

const roles = [
  ["Super administrator", "Full platform control"],
  ["Club president", "Members, events, announcements, reports"],
  ["Membership officer", "QR, verification, suspensions"],
  ["Events officer", "Events & attendance"],
  ["Communications officer", "Announcements & resources"],
  ["Moderator", "Reports & messaging moderation"],
  ["Regular member", "Member app only"],
];

export default function AdminRolesPage() {
  return (
    <AdminShell current="/prototype/admin/roles" title="Roles & permissions">
      <p className="mb-4 text-sm text-muted-foreground">Permission-based access control — assign the least privilege needed.</p>
      <div className="space-y-2">
        {roles.map(([name, desc]) => (
          <div key={name} className="flex items-center justify-between gap-3 rounded-xl border bg-background p-4">
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
            <Badge variant="secondary">Configured</Badge>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
