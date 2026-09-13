"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { MembershipCard } from "@/components/prototype/membership-card";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function UnlockCardPage() {
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function press(digit: string) {
    if (pin.length >= 4) return;
    const next = pin + digit;
    setPin(next);
    setError(false);
    if (next.length === 4) {
      // Prototype: any 4 digits unlock after brief delay
      setTimeout(() => {
        if (next === "0000") {
          setError(true);
          setPin("");
        } else {
          setUnlocked(true);
        }
      }, 200);
    }
  }

  if (unlocked) {
    return (
      <ScreenScroll className="pt-1">
        <ScreenHeader title="Membership card" backHref="/prototype/member/home" />
        <p className="mb-4 text-sm text-success">Card unlocked with your PIN</p>
        <MembershipCard />
        <div className="mt-4 space-y-2">
          <Button className="w-full" render={<Link href="/prototype/member/qr" />}>
            Show QR code
          </Button>
          <Button className="w-full" variant="outline" onClick={() => { setUnlocked(false); setPin(""); }}>
            Lock card again
          </Button>
        </div>
      </ScreenScroll>
    );
  }

  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Unlock card" backHref="/prototype/member/home" />
      <div className="mx-auto mt-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Lock className="size-7" />
      </div>
      <h2 className="mt-4 text-center font-display text-xl font-semibold">Enter your 4-digit card PIN</h2>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Required to view or present your digital membership card.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "flex size-14 items-center justify-center rounded-xl border-2 bg-card text-2xl font-semibold",
              error ? "border-destructive" : "border-primary/30",
              pin.length === i && !error && "border-primary",
            )}
          >
            {pin[i] ? "•" : ""}
          </div>
        ))}
      </div>
      {error && (
        <p className="mt-3 text-center text-sm text-destructive">Incorrect PIN. Try again.</p>
      )}
      <div className="mx-auto mt-8 grid max-w-xs grid-cols-3 gap-3">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].map((key) => {
          if (!key) return <div key="e" />;
          return (
            <button
              key={key}
              type="button"
              onClick={() => (key === "⌫" ? setPin((p) => p.slice(0, -1)) : press(key))}
              className="h-14 rounded-xl border bg-card font-display text-xl font-semibold hover:bg-muted"
            >
              {key}
            </button>
          );
        })}
      </div>
      <Button className="mt-6 w-full" variant="ghost" render={<Link href="/prototype/member/help" />}>
        Forgot card PIN?
      </Button>
    </ScreenScroll>
  );
}
