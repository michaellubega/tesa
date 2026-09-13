import { AdminShell } from "@/components/prototype/admin-shell";
import { Button } from "@/components/ui/button";
import { benefits } from "@/lib/demo-data";

export default function AdminBenefitsPage() {
  return (
    <AdminShell current="/prototype/admin/benefits" title="Benefits management" actions={<Button size="sm">Create benefit</Button>}>
      <div className="grid gap-3 md:grid-cols-2">
        {benefits.map((b) => (
          <div key={b.id} className="rounded-xl border bg-background p-4">
            <p className="text-xs font-medium text-gold">{b.category}</p>
            <p className="font-semibold">{b.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{b.eligibility}</p>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline">Edit</Button>
              <Button size="sm" variant="ghost">Archive</Button>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
