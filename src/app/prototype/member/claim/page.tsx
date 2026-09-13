import Link from "next/link";
import { ClubLogo } from "@/components/club-logo";
import { StatusBadge } from "@/components/status-badge";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";

export default function ClaimPage() {
  return (
    <ScreenScroll className="pt-2">
      <ClubLogo size="sm" className="mb-6" />
      <div className="rounded-2xl border bg-card p-5 text-center shadow-sm">
        <div className="mx-auto inline-flex rounded-xl bg-white p-3">
          <QRCodeSVG value="https://kiutesa.org/claim/QR-B1C3-2M" size={120} fgColor="#003087" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Reference</p>
        <p className="font-mono text-lg font-semibold">QR-B1C3-2M</p>
        <div className="mt-2 flex justify-center">
          <StatusBadge status="Available" />
        </div>
      </div>

      <h1 className="mt-6 font-display text-2xl font-semibold">Claim this QR code</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Once claimed, this code becomes your permanent digital club identity. It will open your
        public profile when scanned by other members.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        <li>· Professional membership card</li>
        <li>· Access to events, benefits, and resources</li>
        <li>· Networking with verified members</li>
      </ul>

      <div className="mt-6 space-y-3">
        <Button className="w-full" size="lg" render={<Link href="/prototype/member/set-pin" />}>
          Claim this QR code
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          First you’ll set a 4-digit PIN to protect your membership card.
        </p>
        <Button
          className="w-full"
          variant="outline"
          render={<Link href="/prototype/member/home" />}
        >
          Sign in to claim as existing member
        </Button>
        <Button className="w-full" variant="ghost" render={<Link href="/prototype/member/welcome" />}>
          Back to welcome
        </Button>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Internal tokens are never shown — only a friendly reference.
      </p>
    </ScreenScroll>
  );
}
