import Link from "next/link";
import { AdminShell } from "@/components/prototype/admin-shell";
import { Button } from "@/components/ui/button";
import { adminStats } from "@/lib/demo-data";

const cards = [
  ["Total members", adminStats.totalMembers],
  ["Active", adminStats.activeMembers],
  ["Unclaimed QR", adminStats.unclaimedQr],
  ["Claimed QR", adminStats.claimedQr],
  ["Suspended", adminStats.suspended],
  ["Pending verification", adminStats.pendingVerification],
];

export default function AdminHomePage() {
  return (
    <AdminShell
      current="/prototype/admin"
      title="Dashboard"
      actions={
        <div className="flex gap-2">
          <Button size="sm" render={<Link href="/prototype/admin/qr" />}>Generate QR</Button>
          <Button size="sm" variant="outline" render={<Link href="/prototype/admin/announcements" />}>Announce</Button>
        </div>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([label, value]) => (
          <div key={label as string} className="rounded-xl border bg-background p-4">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="font-display text-3xl font-semibold">{value as number}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border bg-background p-4">
          <h2 className="font-semibold">Membership growth</h2>
          <div className="mt-4 flex h-40 items-end gap-2">
            {[40, 55, 48, 70, 82, 90, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/80" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Last 7 months · demo data</p>
        </div>
        <div className="rounded-xl border bg-background p-4">
          <h2 className="font-semibold">Quick snapshot</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>· {adminStats.upcomingEvents} upcoming events</li>
            <li>· {adminStats.recentRegistrations} registrations this week</li>
            <li>· QR claim rate trending up after Batch 15</li>
            <li>· 47 profiles awaiting verification</li>
          </ul>
        </div>
      </div>
    </AdminShell>
  );
}
