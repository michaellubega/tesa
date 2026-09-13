"use client";
import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { currentMember } from "@/lib/demo-data";

export default function EditProfilePage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Edit profile" backHref="/prototype/member/profile" action={<span />} />
      <Section title="Personal details">
        <Field label="Full name" defaultValue={currentMember.name} />
        <Field label="Display name" defaultValue={currentMember.displayName} />
        <div className="space-y-1.5"><Label>Bio</Label><Textarea defaultValue={currentMember.bio} /></div>
      </Section>
      <Section title="Academic details">
        <Field label="Student number" defaultValue="2025-08-41310" />
        <Field label="Faculty" defaultValue={currentMember.faculty} />
        <Field label="Department" defaultValue={currentMember.department} />
        <Field label="Course" defaultValue={currentMember.course} />
        <Field label="Year of study" defaultValue={currentMember.year} />
      </Section>
      <Section title="Club details">
        <Field label="Club position" defaultValue={currentMember.role} />
        <Field label="Skills" defaultValue={currentMember.skills.join(", ")} />
        <Field label="Interests" defaultValue={currentMember.interests.join(", ")} />
      </Section>
      <Section title="Social & contact">
        <Field label="Email" defaultValue={currentMember.email} />
        <Field label="Phone" defaultValue={currentMember.phone} />
        <Field label="LinkedIn" placeholder="Optional" />
        <Field label="GitHub" placeholder="Optional" />
      </Section>
      <Section title="Privacy controls">
        <Toggle label="Show phone number" />
        <Toggle label="Show email" defaultChecked />
        <Toggle label="Show student number" />
        <Toggle label="Allow members to contact me" defaultChecked />
        <Toggle label="Allow profile discovery" defaultChecked />
      </Section>
      <Section title="Confirm with account password">
        <p className="mb-2 text-xs text-muted-foreground">
          Profile changes require your account password (not your 4-digit card PIN).
        </p>
        <div className="space-y-1.5">
          <Label>Account password</Label>
          <Input type="password" placeholder="Enter password to confirm changes" autoComplete="current-password" />
        </div>
      </Section>
      <div className="mt-4 flex gap-2 pb-4">
        <Button variant="outline" className="flex-1" render={<Link href="/prototype/member/profile" />}>Cancel</Button>
        <Button className="flex-1" render={<Link href="/prototype/member/profile" />}>Save changes</Button>
      </div>
    </ScreenScroll>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-5">
      <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
      <Separator className="mt-5" />
    </section>
  );
}
function Field(props: { label: string; defaultValue?: string; placeholder?: string }) {
  return (
    <div className="space-y-1.5">
      <Label>{props.label}</Label>
      <Input defaultValue={props.defaultValue} placeholder={props.placeholder} />
    </div>
  );
}
function Toggle({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border bg-card px-3 py-2.5">
      <span className="text-sm">{label}</span>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
