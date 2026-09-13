"use client";

import { QRCodeSVG } from "qrcode.react";
import { BadgeCheck, Share2, Download, Maximize2 } from "lucide-react";
import { club, currentMember } from "@/lib/demo-data";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MembershipCard({
  side = "front",
  className,
}: {
  side?: "front" | "back";
  className?: string;
}) {
  if (side === "back") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border bg-card p-5 shadow-md",
          "bg-gradient-to-br from-primary/5 via-card to-teal/10",
          className,
        )}
      >
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Membership verification
        </p>
        <div className="mt-4 flex justify-center rounded-xl bg-white p-4 dark:bg-white">
          <QRCodeSVG
            value={`https://kiutesa.org/m/${currentMember.id}`}
            size={148}
            level="M"
            bgColor="#ffffff"
            fgColor="#2a2458"
          />
        </div>
        <p className="mt-3 text-center font-mono text-sm">{currentMember.id}</p>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Club credential only — not a university or government ID.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-5 text-primary-foreground shadow-lg",
        "bg-gradient-to-br from-[oklch(0.32_0.12_286)] via-[oklch(0.38_0.14_286)] to-[oklch(0.42_0.1_220)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-10 left-10 size-32 rounded-full bg-teal/20" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            {club.name}
          </p>
          <p className="mt-1 text-sm text-white/80">{club.university}</p>
        </div>
        <div className="flex size-10 items-center justify-center rounded-lg bg-white/15 font-display text-lg font-semibold">
          {club.logoLetter}
        </div>
      </div>
      <div className="relative mt-8 flex items-center gap-3">
        <div className="flex size-14 items-center justify-center rounded-full bg-white/20 text-lg font-semibold">
          {currentMember.photoInitials}
        </div>
        <div>
          <p className="font-display text-xl font-semibold leading-tight">
            {currentMember.name}
          </p>
          <p className="text-sm text-white/80">{currentMember.role}</p>
        </div>
      </div>
      <div className="relative mt-6 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-white/60">Member ID</p>
          <p className="font-mono text-xs">{currentMember.id}</p>
        </div>
        <div>
          <p className="text-white/60">Status</p>
          <p className="flex items-center gap-1 font-medium">
            <BadgeCheck className="size-3.5" /> Active
          </p>
        </div>
        <div>
          <p className="text-white/60">Program</p>
          <p>{currentMember.course}</p>
        </div>
        <div>
          <p className="text-white/60">Issued</p>
          <p>{currentMember.issued}</p>
        </div>
      </div>
    </div>
  );
}

export function QrDisplay({
  size = 200,
  label = true,
}: {
  size?: number;
  label?: boolean;
}) {
  return (
    <div className="rounded-2xl border bg-card p-5 text-center shadow-sm">
      <div className="mx-auto inline-flex rounded-xl bg-white p-4">
        <QRCodeSVG
          value={`https://kiutesa.org/m/${currentMember.id}`}
          size={size}
          level="M"
          bgColor="#ffffff"
          fgColor="#2a2458"
        />
      </div>
      {label && (
        <>
          <p className="mt-3 font-display font-semibold">{currentMember.name}</p>
          <p className="font-mono text-xs text-muted-foreground">{currentMember.id}</p>
          <div className="mt-2 flex justify-center">
            <StatusBadge status="Active" />
          </div>
        </>
      )}
      <div className="mt-4 flex justify-center gap-2">
        <Button size="sm" variant="outline">
          <Share2 className="size-4" /> Share
        </Button>
        <Button size="sm" variant="outline">
          <Download className="size-4" /> Save
        </Button>
        <Button size="sm" variant="outline">
          <Maximize2 className="size-4" /> Full
        </Button>
      </div>
    </div>
  );
}
