import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { StatusBadge } from "@/components/status-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { events } from "@/lib/demo-data";

export default function MyEventsPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="My events" backHref="/prototype/member/events" />
      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4 grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="attended">Attended</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-2">
          {events.filter((e) => e.status === "Registered" || e.status === "Open").slice(0, 2).map((e) => (
            <Link key={e.id} href="/prototype/member/events/detail" className="block rounded-xl border bg-card p-3">
              <div className="flex justify-between gap-2"><p className="font-medium">{e.title}</p><StatusBadge status={e.status} /></div>
              <p className="mt-1 text-xs text-muted-foreground">Ticket KIU-EVT-{e.id.toUpperCase()} · Check-in pending</p>
            </Link>
          ))}
        </TabsContent>
        <TabsContent value="attended" className="space-y-2">
          {events.filter((e) => e.status === "Attended").map((e) => (
            <div key={e.id} className="rounded-xl border bg-card p-3">
              <p className="font-medium">{e.title}</p>
              <p className="text-xs text-muted-foreground">{e.date} · Certificate available</p>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="cancelled">
          <p className="rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">No cancelled registrations</p>
        </TabsContent>
      </Tabs>
    </ScreenScroll>
  );
}
