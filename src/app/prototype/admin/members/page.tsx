import { AdminShell } from "@/components/prototype/admin-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/status-badge";
import { members, currentMember } from "@/lib/demo-data";

const rows = [{ ...currentMember, verified: true }, ...members];

export default function AdminMembersPage() {
  return (
    <AdminShell
      current="/prototype/admin/members"
      title="Member management"
      actions={<Button size="sm" variant="outline">Export list</Button>}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <Input placeholder="Search members" className="max-w-xs" />
        {["All", "Active", "Pending", "Suspended"].map((f) => (
          <button key={f} type="button" className="rounded-full border px-3 py-1 text-xs">{f}</button>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Role</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => (
              <tr key={m.id} className="border-t">
                <td className="px-3 py-2.5 font-medium">{m.name}</td>
                <td className="px-3 py-2.5 font-mono text-xs">{m.id}</td>
                <td className="px-3 py-2.5">{m.role}</td>
                <td className="px-3 py-2.5"><StatusBadge status={m.verified ? "Active" : "Pending"} /></td>
                <td className="px-3 py-2.5 space-x-1">
                  <Button size="xs" variant="ghost">Verify</Button>
                  <Button size="xs" variant="ghost">Suspend</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
