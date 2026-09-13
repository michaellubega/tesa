import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { members } from "@/lib/demo-data";

export default function ConnectionsPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Connections" backHref="/prototype/member/home" />
      <Tabs defaultValue="mine">
        <TabsList className="mb-4 grid w-full grid-cols-3">
          <TabsTrigger value="mine">My connections</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="suggest">Suggestions</TabsTrigger>
        </TabsList>
        <TabsContent value="mine" className="space-y-2">
          {members.slice(0, 3).map((m) => (
            <div key={m.id} className="flex items-center gap-3 rounded-xl border bg-card p-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">{m.photoInitials}</div>
              <div className="flex-1"><p className="font-medium">{m.name}</p><p className="text-xs text-muted-foreground">{m.mutual} mutual interests</p></div>
              <Button size="sm" variant="outline" render={<Link href="/prototype/member/messages" />}>Message</Button>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="requests" className="space-y-2">
          <div className="rounded-xl border bg-card p-3">
            <p className="font-medium">Priya Nair</p>
            <p className="text-xs text-muted-foreground">Events Lead · 5 mutual</p>
            <div className="mt-3 flex gap-2">
              <Button size="sm" className="flex-1">Accept</Button>
              <Button size="sm" variant="outline" className="flex-1">Decline</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="suggest" className="space-y-2">
          {members.slice(2).map((m) => (
            <div key={m.id} className="flex items-center justify-between rounded-xl border bg-card p-3">
              <div><p className="font-medium">{m.name}</p><p className="text-xs text-muted-foreground">{m.skills.join(" · ")}</p></div>
              <Button size="sm">Connect</Button>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </ScreenScroll>
  );
}
