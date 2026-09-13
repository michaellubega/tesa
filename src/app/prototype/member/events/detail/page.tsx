import Link from "next/link";
import { CalendarPlus, Share2 } from "lucide-react";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/demo-data";

const e = events[0];

export default function EventDetailPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Event" backHref="/prototype/member/events" />
      <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-primary/80 to-teal/60 p-4 text-primary-foreground">
        <p className="text-xs uppercase tracking-wider text-white/80">{e.category}</p>
        <h2 className="mt-8 font-display text-2xl font-semibold">{e.title}</h2>
      </div>
      <dl className="space-y-2 text-sm">
        <Row k="When" v={`${e.date} · ${e.time}`} />
        <Row k="Where" v={e.venue} />
        <Row k="Organizer" v={e.organizer} />
        <Row k="Seats" v={e.seats} />
      </dl>
      <h3 className="mt-5 font-semibold">About</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        A full-day design sprint for members building campus products. Includes critique sessions, guest mentors, and team pitches.
      </p>
      <h3 className="mt-4 font-semibold">Agenda</h3>
      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
        <li>10:00 — Kickoff & teams</li>
        <li>12:30 — Lunch & mentor desk</li>
        <li>15:30 — Final pitches</li>
      </ul>
      <div className="mt-6 space-y-2">
        <Button className="w-full" render={<Link href="/prototype/member/my-events" />}>Register</Button>
        <Button className="w-full" variant="outline"><CalendarPlus className="size-4" /> Add to calendar</Button>
        <Button className="w-full" variant="outline"><Share2 className="size-4" /> Share event</Button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">QR check-in will be available at the venue for registered members.</p>
    </ScreenScroll>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 rounded-lg border bg-card px-3 py-2">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}
