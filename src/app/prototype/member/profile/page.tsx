import Link from "next/link";
import { BadgeCheck, Pencil } from "lucide-react";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { MemberBottomNav } from "@/components/prototype/member-bottom-nav";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { currentMember, achievements } from "@/lib/demo-data";

export default function ProfilePage() {
  return (
    <>
      <ScreenScroll withNav className="pt-1">
        <ScreenHeader
          title="My profile"
          backHref="/prototype/member/home"
          action={
            <Link href="/prototype/member/edit-profile" className="rounded-lg p-2 hover:bg-muted" aria-label="Edit">
              <Pencil className="size-5" />
            </Link>
          }
        />
        <div className="text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary/15 text-2xl font-semibold text-primary">
            {currentMember.photoInitials}
          </div>
          <h2 className="mt-3 font-display text-xl font-semibold">{currentMember.name}</h2>
          <p className="text-sm text-muted-foreground">{currentMember.role}</p>
          <p className="mt-1 inline-flex items-center gap-1 text-xs text-primary">
            <BadgeCheck className="size-3.5" /> Verified member · Visibility: Members only
          </p>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{currentMember.bio}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <Info label="Program" value={currentMember.course} />
          <Info label="Year" value={currentMember.year} />
          <Info label="Department" value={currentMember.department} />
          <Info label="Joined" value={currentMember.joined} />
        </div>
        <h3 className="mt-5 mb-2 text-sm font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-1.5">
          {currentMember.skills.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
        </div>
        <h3 className="mt-5 mb-2 text-sm font-semibold">Interests</h3>
        <div className="flex flex-wrap gap-1.5">
          {currentMember.interests.map((s) => <Badge key={s} variant="outline">{s}</Badge>)}
        </div>
        <h3 className="mt-5 mb-2 text-sm font-semibold">Achievements</h3>
        <ul className="space-y-2 text-sm">
          {achievements.slice(0, 3).map((a) => (
            <li key={a.id} className="rounded-lg border bg-card px-3 py-2">
              {a.title} <span className="text-muted-foreground">· {a.date}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 space-y-2">
          <Button className="w-full" variant="outline" render={<Link href="/prototype/member/public-profile" />}>
            Preview public profile
          </Button>
          <Button className="w-full" variant="outline" render={<Link href="/prototype/member/settings" />}>
            Manage privacy
          </Button>
        </div>
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-card p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
