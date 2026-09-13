import Link from "next/link";
import { BadgeCheck, QrCode, Shield } from "lucide-react";
import { ClubLogo } from "@/components/club-logo";
import { MembershipCard } from "@/components/prototype/membership-card";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { club } from "@/lib/demo-data";

export default function WelcomePage() {
  return (
    <ScreenScroll className="pt-2">
      <ClubLogo size="md" className="mb-6" />
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        Your club identity, in one scan
      </h1>
      <p className="mt-3 text-muted-foreground">{club.description}</p>

      <div className="mt-6">
        <MembershipCard />
      </div>

      <div className="mt-6 space-y-3">
        <Button className="w-full" size="lg" render={<Link href="/prototype/member/claim" />}>
          <QrCode className="size-4" />
          Scan or claim your QR code
        </Button>
        <Button
          className="w-full"
          size="lg"
          variant="outline"
          render={<Link href="/prototype/member/home" />}
        >
          Already a member? Sign in
        </Button>
      </div>

      <ul className="mt-8 space-y-3 text-sm">
        {[
          { icon: BadgeCheck, t: "Verified digital membership card" },
          { icon: Shield, t: "Privacy-first public profile" },
          { icon: QrCode, t: "One QR for identity & networking" },
        ].map((item) => (
          <li key={item.t} className="flex items-center gap-3 rounded-xl border bg-card px-3 py-2.5">
            <item.icon className="size-4 text-primary" />
            {item.t}
          </li>
        ))}
      </ul>

      <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Shield className="size-3.5" />
        Verified club platform · {club.university}
      </p>
    </ScreenScroll>
  );
}
