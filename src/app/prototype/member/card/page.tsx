import Link from "next/link";
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
        <p className="mb-4 text-sm text-muted-foreground">
          Official KIUTESA club credential. Not a university or government ID.
        </p>
        <Tabs defaultValue="front">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="front" className="flex-1">Front</TabsTrigger>
            <TabsTrigger value="back" className="flex-1">Back</TabsTrigger>
          </TabsList>
          <TabsContent value="front"><MembershipCard /></TabsContent>
          <TabsContent value="back"><MembershipCard side="back" /></TabsContent>
        </Tabs>
        <div className="mt-4 space-y-2">
          <Button className="w-full" render={<Link href="/prototype/member/qr" />}>Show QR code</Button>
          <Button className="w-full" variant="outline">Share card</Button>
          <Button className="w-full" variant="outline">Download / save</Button>
          <Button className="w-full" variant="ghost" render={<Link href="/prototype/member/profile" />}>View full profile</Button>
          <Button className="w-full" variant="ghost" render={<Link href="/prototype/member/help" />}>Report a problem</Button>
        </div>
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}
