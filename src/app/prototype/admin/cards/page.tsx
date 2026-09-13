"use client";

import { useRef, useState } from "react";
import { Download, IdCard } from "lucide-react";
import { AdminShell } from "@/components/prototype/admin-shell";
import { MembershipCard } from "@/components/prototype/membership-card";
import { Button } from "@/components/ui/button";
import { currentMember, members } from "@/lib/demo-data";

async function downloadTwoFacedCard(root: HTMLElement, filename: string) {
  const { default: html2canvas } = await import("html2canvas");
  const faces = root.querySelectorAll<HTMLElement>("[data-print-face]");
  if (faces.length < 2) return;

  const canvases = [];
  for (const face of Array.from(faces)) {
    canvases.push(
      await html2canvas(face, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
      }),
    );
  }

  const [front, back] = canvases;
  const gap = 32;
  const out = document.createElement("canvas");
  out.width = Math.max(front.width, back.width);
  out.height = front.height + back.height + gap;
  const ctx = out.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, out.width, out.height);
  ctx.drawImage(front, 0, 0);
  ctx.fillStyle = "#64748b";
  ctx.font = "20px sans-serif";
  ctx.fillText("Front", 16, 28);
  ctx.drawImage(back, 0, front.height + gap);
  ctx.fillText("Back", 16, front.height + gap + 28);

  const link = document.createElement("a");
  link.download = filename;
  link.href = out.toDataURL("image/png");
  link.click();
}

export default function AdminCardsPage() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const roster = [{ ...currentMember }, ...members.slice(0, 2).map((m) => ({
    ...currentMember,
    id: m.id,
    name: m.name,
    photoInitials: m.photoInitials,
    role: m.role,
    course: m.course,
  }))];

  async function onDownload() {
    if (!sheetRef.current) return;
    setBusy(true);
    try {
      await downloadTwoFacedCard(
        sheetRef.current,
        `kiutesa-membership-card-${currentMember.id}-front-back.png`,
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <AdminShell
      current="/prototype/admin/cards"
      title="Membership cards"
      actions={
        <Button size="sm" onClick={onDownload} disabled={busy}>
          <Download className="size-4" />
          {busy ? "Preparing…" : "Download front & back"}
        </Button>
      }
    >
      <p className="mb-6 max-w-2xl text-sm text-muted-foreground">
        Preview and download printable membership cards with <strong>two faces</strong> (front identity
        + back QR). The club logo from Settings is included on both sides.
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={onDownload} disabled={busy}>
          <Download className="size-4" />
          Download selected card (2 faces)
        </Button>
        <Button size="sm" variant="secondary" disabled>
          <IdCard className="size-4" />
          Batch download (coming soon)
        </Button>
      </div>

      <div ref={sheetRef} className="grid gap-8 lg:grid-cols-2">
        <div data-print-face="front" className="rounded-2xl bg-white p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Face 1 · Front
          </p>
          <MembershipCard side="front" />
        </div>
        <div data-print-face="back" className="rounded-2xl bg-white p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Face 2 · Back
          </p>
          <MembershipCard side="back" />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-lg font-semibold">Member queue</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Select a member in production to generate their two-faced card PDF/PNG.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Member</th>
                <th className="px-3 py-2">Student number</th>
                <th className="px-3 py-2">Role</th>
                <th className="px-3 py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {roster.map((m) => (
                <tr key={m.id} className="border-t">
                  <td className="px-3 py-2.5 font-medium">{m.name}</td>
                  <td className="px-3 py-2.5 font-mono text-xs">{m.id}</td>
                  <td className="px-3 py-2.5">{m.role}</td>
                  <td className="px-3 py-2.5">
                    <Button size="sm" variant="ghost" onClick={onDownload} disabled={busy}>
                      <Download className="size-3.5" />
                      Front + back
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
