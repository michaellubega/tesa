"use client";

import { useState } from "react";
import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const steps = ["Account", "Student", "Profile", "Confirm"];

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const pct = ((step + 1) / steps.length) * 100;

  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Create your membership" backHref="/prototype/member/claim" action={<span />} />
      <div className="mb-4">
        <div className="mb-2 flex justify-between text-xs font-medium text-muted-foreground">
          <span>
            Step {step + 1} of {steps.length} · {steps[step]}
          </span>
          <span>{Math.round(pct)}%</span>
        </div>
        <Progress value={pct} />
      </div>

      {step === 0 && (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label>Full name</Label>
            <Input defaultValue="Amara Okonkwo" />
          </div>
          <div className="space-y-1.5">
            <Label>University email</Label>
            <Input type="email" defaultValue="amara.okonkwo@kiu.ac.ug" />
          </div>
          <div className="space-y-1.5">
            <Label>Password</Label>
            <Input type="password" defaultValue="••••••••" />
          </div>
          <p className="text-xs text-muted-foreground">We’ll send a verification code to your email.</p>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label>Student / membership number</Label>
            <Input defaultValue="RU-204918" />
          </div>
          <div className="space-y-1.5">
            <Label>Faculty</Label>
            <Input defaultValue="School of Computing" />
          </div>
          <div className="space-y-1.5">
            <Label>Course / program</Label>
            <Input defaultValue="BSc Computer Science" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Year</Label>
              <Input defaultValue="Year 3" />
            </div>
            <div className="space-y-1.5">
              <Label>Graduation</Label>
              <Input defaultValue="2027" />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary">
              AO
            </div>
            <Button variant="outline" size="sm">
              Upload photo
            </Button>
          </div>
          <div className="space-y-1.5">
            <Label>Short bio</Label>
            <Textarea defaultValue="CS junior focused on product design and community building." />
          </div>
          <div className="space-y-1.5">
            <Label>Skills (comma separated)</Label>
            <Input defaultValue="Product Design, React, Public Speaking" />
          </div>
          <div className="space-y-1.5">
            <Label>LinkedIn (optional)</Label>
            <Input placeholder="linkedin.com/in/…" />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 text-sm">
          <div className="rounded-xl border bg-card p-4">
            <p className="font-medium">Amara Okonkwo</p>
            <p className="text-muted-foreground">BSc Computer Science · Year 3</p>
            <p className="mt-2 font-mono text-xs">Claiming QR-B1C3-2M</p>
          </div>
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" defaultChecked />
            <span>I agree to membership terms and club community guidelines.</span>
          </label>
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" defaultChecked />
            <span>I consent to processing of profile data as described in the privacy policy.</span>
          </label>
        </div>
      )}

      <div className="mt-6 flex gap-2">
        {step > 0 && (
          <Button variant="outline" className="flex-1" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button className="flex-1" onClick={() => setStep((s) => s + 1)}>
            Continue
          </Button>
        ) : (
          <Button className="flex-1" render={<Link href="/prototype/member/success" />}>
            Confirm & claim
          </Button>
        )}
      </div>
    </ScreenScroll>
  );
}
