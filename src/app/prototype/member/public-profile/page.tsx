import Link from "next/link";
import { BadgeCheck, Flag, MessageCircle, UserPlus } from "lucide-react";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { members } from "@/lib/demo-data";

const m = members[1];

export default function PublicProfilePage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Member profile" backHref="/prototype/member/discover" action={<span />} />
      <p className="mb-3 rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
        Opened from QR scan · Showing public information only
      </p>
      <div className="text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gold/15 text-2xl font-semibold text-gold">
          {m.photoInitials}
        </div>
        <h2 className="mt-3 font-display text-xl font-semibold">{m.name}</h2>
        <p className="text-sm text-muted-foreground">{m.role} · {m.course}</p>
        <p className="mt-1 inline-flex items-center gap-1 text-xs text-primary">
          <BadgeCheck className="size-3.5" /> Verified membership
        </p>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Events lead designing workshops and member onboarding experiences.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-xl border p-3"><p className="text-xs text-muted-foreground">Department</p><p className="font-medium">{m.department}</p></div>
        <div className="rounded-xl border p-3"><p className="text-xs text-muted-foreground">Member since</p><p className="font-medium">2024</p></div>
      </div>
      <h3 className="mt-5 mb-2 text-sm font-semibold">Skills</h3>
      <div className="flex flex-wrap gap-1.5">{m.skills.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}</div>
      <h3 className="mt-5 mb-2 text-sm font-semibold">Interests</h3>
      <div className="flex flex-wrap gap-1.5">{m.interests.map((s) => <Badge key={s} variant="outline">{s}</Badge>)}</div>
      <p className="mt-4 text-xs text-muted-foreground">Verified by club · Optional bio provided by member</p>
      <div className="mt-5 space-y-2">
        <Button className="w-full" render={<Link href="/prototype/member/connections" />}><UserPlus className="size-4" /> Connect</Button>
        <Button className="w-full" variant="outline" render={<Link href="/prototype/member/messages" />}><MessageCircle className="size-4" /> Message</Button>
        <Button className="w-full" variant="ghost"><Flag className="size-4" /> Report profile</Button>
      </div>
    </ScreenScroll>
  );
}
