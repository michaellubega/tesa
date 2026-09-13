import { AdminShell } from "@/components/prototype/admin-shell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  return (
    <AdminShell current="/prototype/admin/settings" title="Club settings">
      <div className="max-w-lg space-y-4">
        <div className="space-y-1.5"><Label>Club name</Label><Input defaultValue="KIUTESA" /></div>
        <div className="space-y-1.5"><Label>Full name</Label><Input defaultValue="Kampala International University Technology Student Association" /></div>
        <div className="space-y-1.5"><Label>University</Label><Input defaultValue="Kampala International University" /></div>
        <div className="space-y-1.5"><Label>Primary brand color</Label><Input defaultValue="#3B3478" /></div>
        <div className="space-y-1.5"><Label>Support email</Label><Input defaultValue="membership@kiutesa.org" /></div>
        <Button>Save settings</Button>
      </div>
    </AdminShell>
  );
}
