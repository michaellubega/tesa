import { AdminShell } from "@/components/prototype/admin-shell";

const metrics = [
  ["Registration trend", "↑ 18% vs last month"],
  ["QR claim rate", "86% of issued codes"],
  ["Event participation", "Avg 62 attendees"],
  ["Benefit redemptions", "214 this term"],
  ["Resource views", "Top: CV checklist"],
  ["Dept distribution", "CS 34% · Eng 22% · Biz 18%"],
];

export default function AdminReportsPage() {
  return (
    <AdminShell current="/prototype/admin/reports" title="Reports & analytics">
      <p className="mb-4 text-sm text-muted-foreground">
        Aggregated insights only — avoid exposing sensitive personal fields in shared reports.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map(([t, v]) => (
          <div key={t} className="rounded-xl border bg-background p-4">
            <p className="text-sm text-muted-foreground">{t}</p>
            <p className="mt-1 font-display text-xl font-semibold">{v}</p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
