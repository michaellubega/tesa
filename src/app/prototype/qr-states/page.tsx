import Link from "next/link";
import { DesignChrome } from "@/components/design-chrome";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";

const states = [
  {
    status: "Available",
    title: "Unclaimed QR",
    body: "Available to claim. Clear registration CTA. No personal data shown.",
    href: "/prototype/member/claim",
    cta: "Claim journey",
  },
  {
    status: "Claimed",
    title: "Claimed / Active",
    body: "Linked to an active member. Opens public profile or verification view.",
    href: "/prototype/member/public-profile",
    cta: "View public profile",
  },
  {
    status: "Suspended",
    title: "Suspended QR",
    body: "Temporarily inactive. Does not reveal private member details. Offers support path.",
    href: "/prototype/member/help",
    cta: "Support instructions",
  },
  {
    status: "Revoked",
    title: "Revoked QR",
    body: "No longer valid. Explains how to contact the club for a replacement process.",
    href: "/prototype/member/help",
    cta: "Contact club",
  },
  {
    status: "Pending",
    title: "Lost or compromised",
    body: "Member reports issue → verification → admin-approved reassignment.",
    href: "/prototype/member/settings",
    cta: "Report flow",
  },
  {
    status: "Invalid",
    title: "Invalid / unrecognized",
    body: "Helpful error: code may be damaged, expired, or not from this club.",
    href: "/prototype/member/welcome",
    cta: "Back to welcome",
  },
];

export default function QrStatesPage() {
  return (
    <DesignChrome
      title="QR security UX states"
      subtitle="The QR carries only a secure identifier. Status screens must stay clear, private, and trustworthy."
    >
      <div className="mb-8 rounded-2xl border bg-card p-6 md:flex md:items-center md:gap-8">
        <div className="mx-auto w-fit rounded-xl bg-white p-4">
          <QRCodeSVG value="https://kiutesa.org/m/token-only" size={140} fgColor="#0B6E4F" />
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="font-display text-xl font-semibold">Design principle</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Encode a rotating or opaque membership token — never name, student number, email, or
            phone. Friendly references like QR-B1C3-2M are for humans; secrets stay on the server.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {states.map((s) => (
          <div key={s.title} className="flex flex-col rounded-2xl border bg-card p-5 shadow-sm">
            <StatusBadge status={s.status} className="w-fit" />
            <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.body}</p>
            <Button className="mt-4" variant="outline" render={<Link href={s.href} />}>
              {s.cta}
            </Button>
          </div>
        ))}
      </div>
    </DesignChrome>
  );
}
