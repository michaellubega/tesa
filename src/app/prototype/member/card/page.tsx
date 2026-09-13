import Link from "next/link";
import { Lock } from "lucide-react";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { MembershipCard } from "@/components/prototype/membership-card";
import { MemberBottomNav } from "@/components/prototype/member-bottom-nav";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CardPage() {
  return (
    <>
      <ScreenScroll withNav className="pt-1">
        <ScreenHeader title="Membership card" backHref="/prototype/member/home" />
        <div className="mb-4 flex items-start gap-2 rounded-xl border border-gold/30 bg-gold/10 px-3 py-2.5 text-sm">
          <Lock className="mt-0.5 size-4 shrink-0 text-gold-foreground" />
          <p className="text-muted-foreground">
            Card is PIN-protected. Use{" "}
            <Link href="/prototype/member/unlock-card" className="font-medium text-foreground underline-offset-2 hover:underline">
              Unlock card
            </Link>{" "}
            before presenting it in person.
          </p>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Official KIUTESA club credential. Not a university or government ID.
        </p>
        <Tabs defaultValue="front">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="front" className="flex-1">
              Front
            </TabsTrigger>
            <TabsTrigger value="back" className="flex-1">
              Back
            </TabsTrigger>
          </TabsList>
          <TabsContent value="front">
            <MembershipCard />
          </TabsContent>
          <TabsContent value="back">
            <MembershipCard side="back" />
          </TabsContent>
        </Tabs>
        <div className="mt-4 space-y-2">
          <Button className="w-full" render={<Link href="/prototype/member/unlock-card" />}>
            <Lock className="size-4" />
            Unlock with PIN to present
          </Button>
          <Button className="w-full" variant="outline" render={<Link href="/prototype/member/qr" />}>
            Show QR code
          </Button>
          <Button className="w-full" variant="outline">
            Share card
          </Button>
          <Button className="w-full" variant="ghost" render={<Link href="/prototype/member/profile" />}>
            View full profile
          </Button>
        </div>
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}
