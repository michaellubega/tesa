"use client";
import { useState } from "react";
import Link from "next/link";
import { QrCode, Search } from "lucide-react";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { MemberBottomNav } from "@/components/prototype/member-bottom-nav";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { StatePanel, StateSwitcher } from "@/components/prototype/state-panel";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { members } from "@/lib/demo-data";
import type { ScreenState } from "@/lib/demo-data";

export default function DiscoverPage() {
  const [state, setState] = useState<ScreenState>("default");
  const [q, setQ] = useState("");
  const filtered = members.filter((m) => m.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <ScreenScroll withNav className="pt-1">
        <ScreenHeader title="Discover members" action={<Link href="/prototype/member/qr" className="rounded-lg p-2 hover:bg-muted"><QrCode className="size-5" /></Link>} />
        <div className="mb-3"><StateSwitcher value={state} onChange={setState} /></div>
        {state !== "default" ? (
          <StatePanel state={state} emptyTitle="No members yet" emptyBody="When members claim QR codes, they appear here." />
        ) : (
          <>
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search by name" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div className="mb-4 flex gap-2 overflow-x-auto text-xs">
              {["Department", "Course", "Year", "Skills", "Role"].map((f) => (
                <button key={f} type="button" className="shrink-0 rounded-full border bg-card px-3 py-1.5">{f}</button>
              ))}
            </div>
            {filtered.length === 0 ? (
              <StatePanel state="empty" emptyTitle="No results" emptyBody="Try another name or clear filters." />
            ) : (
              <ul className="space-y-2">
                {filtered.map((m) => (
                  <li key={m.id}>
                    <Link href="/prototype/member/public-profile" className="flex items-center gap-3 rounded-xl border bg-card p-3">
                      <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">{m.photoInitials}</div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{m.name} {m.verified && <Badge className="ml-1" variant="secondary">Verified</Badge>}</p>
                        <p className="truncate text-xs text-muted-foreground">{m.role} · {m.department} · {m.year}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}
