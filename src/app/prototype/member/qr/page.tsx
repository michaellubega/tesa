import { ScreenHeader } from "@/components/prototype/screen-header";
import { QrDisplay } from "@/components/prototype/membership-card";
import { MemberBottomNav } from "@/components/prototype/member-bottom-nav";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { StatusBadge } from "@/components/status-badge";
import { currentMember } from "@/lib/demo-data";

export default function QrPage() {
  return (
    <>
      <ScreenScroll withNav className="pt-1">
        <ScreenHeader title="My QR code" backHref="/prototype/member/home" />
        <QrDisplay size={220} />
        <div className="mt-4 rounded-xl border bg-card p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">QR status</span>
            <StatusBadge status="Active" />
          </div>
          <p className="mt-3 text-muted-foreground">
            Let another member scan this code to view your public profile.
          </p>
          <p className="mt-3 rounded-lg bg-warning/15 px-3 py-2 text-xs text-warning-foreground">
            Do not share publicly if your profile includes private contact details.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Reference {currentMember.qrRef} · Reassignment requires admin verification.
          </p>
        </div>
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}
