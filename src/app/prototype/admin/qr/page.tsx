import { AdminShell } from "@/components/prototype/admin-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/status-badge";
import { qrCodes } from "@/lib/demo-data";

export default function AdminQrPage() {
  return (
    <AdminShell
      current="/prototype/admin/qr"
      title="QR code management"
      actions={
        <div className="flex gap-2">
          <Button size="sm">Generate single</Button>
          <Button size="sm" variant="secondary">Generate batch</Button>
          <Button size="sm" variant="outline" render={<a href="/prototype/admin/cards" />}>
            Download cards
          </Button>
          <Button size="sm" variant="outline">Export list</Button>
        </div>
      }
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <Input placeholder="Search by QR reference" className="max-w-xs" />
        {["All", "Unclaimed", "Claimed", "Suspended", "Revoked"].map((f) => (
          <button key={f} type="button" className="rounded-full border px-3 py-1 text-xs">{f}</button>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2">Reference</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Member</th>
              <th className="px-3 py-2">Batch</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {qrCodes.map((q) => (
              <tr key={q.ref} className="border-t">
                <td className="px-3 py-2.5 font-mono text-xs">{q.ref}</td>
                <td className="px-3 py-2.5"><StatusBadge status={q.status} /></td>
                <td className="px-3 py-2.5">{q.member}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{q.batch}</td>
                <td className="px-3 py-2.5">
                  <Button size="xs" variant="ghost">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Tokens stay server-side. Admins see friendly references and assignment history only.
      </p>
    </AdminShell>
  );
}
