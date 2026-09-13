import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { currentMember } from "@/lib/demo-data";

export default function MembershipPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Membership status" backHref="/prototype/member/home" />
      <div className="rounded-2xl border bg-card p-4">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg font-semibold">Current status</p>
          <StatusBadge status={currentMember.status} />
        </div>
        <dl className="mt-4 space-y-2 text-sm">
          <Row k="Member ID" v={currentMember.id} />
          <Row k="QR assignment" v={`${currentMember.qrRef} · Claimed`} />
          <Row k="Category" v="Standard student member" />
          <Row k="Position" v={currentMember.role} />
          <Row k="Joined" v={currentMember.joined} />
          <Row k="Renewal" v="Not required this term" />
        </dl>
      </div>
      <h3 className="mt-5 mb-2 text-sm font-semibold">Status meanings</h3>
      <ul className="space-y-2 text-xs text-muted-foreground">
        <li><StatusBadge status="Pending" /> Awaiting verification</li>
        <li><StatusBadge status="Active" /> Full member access</li>
        <li><StatusBadge status="Suspended" /> Temporary restriction</li>
        <li><StatusBadge status="Expired" /> Renewal needed</li>
        <li><StatusBadge status="Revoked" /> Membership ended</li>
      </ul>
      <Button className="mt-5 w-full" variant="outline" render={<Link href="/prototype/member/help" />}>Membership rules & terms</Button>
    </ScreenScroll>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/60 py-2 last:border-0">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}
