"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Delete, ShieldCheck } from "lucide-react";
import { ClubLogo } from "@/components/club-logo";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Phase = "create" | "confirm" | "mismatch";

export default function SetPinPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("create");
  const [pin, setPin] = useState("");
  const [firstPin, setFirstPin] = useState("");

  function press(digit: string) {
    if (pin.length >= 4) return;
    const next = pin + digit;
    setPin(next);

    if (phase === "create") {
      if (next.length === 4) {
        setTimeout(() => {
          setFirstPin(next);
          setPin("");
          setPhase("confirm");
        }, 180);
      }
      return;
    }

    if (next.length === 4) {
      if (next === firstPin) {
        router.push("/prototype/member/register");
      } else {
        setPhase("mismatch");
        setTimeout(() => {
          setPin("");
          setPhase("confirm");
        }, 900);
      }
    }
  }

  function backspace() {
    setPin((p) => p.slice(0, -1));
    if (phase === "mismatch") setPhase("confirm");
  }

  const title =
    phase === "create"
      ? "Protect your membership card"
      : phase === "mismatch"
        ? "PINs didn’t match"
        : "Confirm your card PIN";

  const subtitle =
    phase === "create"
      ? "Create a 4-digit PIN. You’ll enter it whenever you open or show your digital membership card."
      : phase === "mismatch"
        ? "Try confirming again. This PIN is only for your card — not your account password."
        : "Enter the same 4-digit PIN once more to lock it in.";

  return (
    <ScreenScroll className="pt-2">
      <ClubLogo size="sm" className="mb-6" />
      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <ShieldCheck className="size-6" />
      </div>
      <h1 className="font-display text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

      <div className="mt-8 flex justify-center gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "flex size-14 items-center justify-center rounded-xl border-2 bg-card text-2xl font-semibold",
              phase === "mismatch" ? "border-destructive text-destructive" : "border-primary/30",
              pin.length === i && phase !== "mismatch" && "border-primary",
            )}
          >
            {pin[i] ? "•" : ""}
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        QR reference <span className="font-mono font-medium text-foreground">QR-B1C3-2M</span> · Card
        PIN only
      </p>

      <div className="mx-auto mt-8 grid max-w-xs grid-cols-3 gap-3">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"].map((key) => {
          if (key === "") return <div key="empty" />;
          if (key === "del") {
            return (
              <button
                key="del"
                type="button"
                onClick={backspace}
                className="flex h-14 items-center justify-center rounded-xl border bg-card text-muted-foreground hover:bg-muted"
                aria-label="Delete"
              >
                <Delete className="size-5" />
              </button>
            );
          }
          return (
            <button
              key={key}
              type="button"
              onClick={() => press(key)}
              className="h-14 rounded-xl border bg-card font-display text-xl font-semibold hover:bg-muted active:bg-primary/10"
            >
              {key}
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-2">
        <Button className="w-full" variant="outline" render={<Link href="/prototype/member/claim" />}>
          Back to claim
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Next you’ll create an account password to sign in and edit your profile.
        </p>
      </div>
    </ScreenScroll>
  );
}
