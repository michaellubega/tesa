import Link from "next/link";
import { ClubLogo } from "@/components/club-logo";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { club } from "@/lib/demo-data";

export default function WelcomePage() {
  return (
    <ScreenScroll className="flex flex-col pt-6">
      <div className="flex flex-1 flex-col justify-center">
        <ClubLogo size="lg" className="mb-10" />
        <p className="text-sm text-muted-foreground">{club.university}</p>
        <p className="mt-3 max-w-sm text-base text-muted-foreground">
          Scan your QR code to claim membership, or sign in if you already have an account.
        </p>

        <div className="mt-10 space-y-3">
          <Button className="w-full" size="lg" render={<Link href="/prototype/member/claim" />}>
            Scan or claim QR code
          </Button>
          <Button
            className="w-full"
            size="lg"
            variant="outline"
            render={<Link href="/prototype/member/home" />}
          >
            Sign in
          </Button>
        </div>
      </div>
    </ScreenScroll>
  );
}
