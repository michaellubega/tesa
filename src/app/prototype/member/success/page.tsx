import Link from "next/link";
import { PartyPopper } from "lucide-react";
import { MembershipCard } from "@/components/prototype/membership-card";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { currentMember } from "@/lib/demo-data";

export default function SuccessPage() {
  return (
    <ScreenScroll className="pt-6 text-center">
      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
        <PartyPopper className="size-7" />
      </div>
      <h1 className="font-display text-2xl font-semibold">Welcome, {currentMember.name.split(" ")[0]}!</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Your digital club identity is ready. QR {currentMember.qrRef} is now permanently linked to
        your membership.
      </p>
      <div className="mx-auto mt-4 flex size-20 items-center justify-center rounded-full bg-primary/15 text-2xl font-semibold text-primary">
        {currentMember.photoInitials}
      </div>
      <p className="mt-2 font-mono text-sm">{currentMember.id}</p>
      <div className="mt-6 text-left">
        <MembershipCard />
      </div>
      <div className="mt-6 space-y-2 text-left">
        <Button className="w-full" render={<Link href="/prototype/member/profile" />}>
          View my profile
        </Button>
        <Button className="w-full" variant="outline" render={<Link href="/prototype/member/card" />}>
          View membership card
        </Button>
        <Button className="w-full" variant="outline" render={<Link href="/prototype/member/benefits" />}>
          Explore member benefits
        </Button>
        <Button className="w-full" variant="ghost" render={<Link href="/prototype/member/home" />}>
          Go to dashboard
        </Button>
      </div>
    </ScreenScroll>
  );
}
