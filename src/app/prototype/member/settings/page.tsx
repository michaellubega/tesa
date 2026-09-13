import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { MemberBottomNav } from "@/components/prototype/member-bottom-nav";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <>
      <ScreenScroll withNav className="pt-1">
        <ScreenHeader title="Settings & privacy" backHref="/prototype/member/profile" />
        <Group title="Account">
          <Item label="Email & phone" href="/prototype/member/edit-profile" />
          <Item label="Account password (profile updates)" />
          <Item label="Sign out" />
          <Item label="Delete account" danger />
        </Group>
        <Group title="Membership card PIN">
          <Item label="Change 4-digit card PIN" href="/prototype/member/set-pin" />
          <Item label="Unlock card" href="/prototype/member/unlock-card" />
          <p className="px-3 py-2 text-xs text-muted-foreground">
            Card PIN opens your digital card. Account password signs you in and lets you edit your profile.
          </p>
        </Group>
        <Group title="Profile privacy">
          <Toggle label="Profile visible to members" defaultChecked />
          <Toggle label="Search discoverability" defaultChecked />
          <Toggle label="Allow connection requests" defaultChecked />
        </Group>
        <Group title="Notifications">
          <Toggle label="Event reminders" defaultChecked />
          <Toggle label="Announcements" defaultChecked />
          <Toggle label="Messages" defaultChecked />
          <Toggle label="Email notifications" />
        </Group>
        <Group title="QR code management">
          <Item label="View assigned QR" href="/prototype/member/qr" />
          <Item label="Report lost or compromised QR" href="/prototype/member/help" />
          <Item label="Request reassignment" href="/prototype/member/help" />
        </Group>
        <Group title="Legal">
          <Item label="Privacy policy" />
          <Item label="Terms of service" />
          <Item label="Membership rules" />
        </Group>
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}
function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-5">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</h2>
      <div className="overflow-hidden rounded-xl border bg-card">{children}</div>
      <Separator className="mt-5" />
    </section>
  );
}
function Item({ label, href, danger }: { label: string; href?: string; danger?: boolean }) {
  const className = `flex w-full items-center justify-between px-3 py-3 text-sm ${danger ? "text-destructive" : ""}`;
  if (href) return <Link href={href} className={className}>{label}<span className="text-muted-foreground">›</span></Link>;
  return <button type="button" className={className}>{label}<span className="text-muted-foreground">›</span></button>;
}
function Toggle({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 px-3 py-3 text-sm">
      <span>{label}</span>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
