import Link from "next/link";
import { DesignChrome } from "@/components/design-chrome";
import { Button } from "@/components/ui/button";

const journeys = [
  {
    title: "Claim a QR code",
    href: "/flows/claim",
    steps: ["Scan / open link", "Set 4-digit card PIN", "Create account password", "Confirm claim"],
  },
  {
    title: "Complete registration",
    href: "/flows/register",
    steps: ["Password for profile edits", "Student info", "Profile", "Consent & claim"],
  },
  {
    title: "View a public profile",
    href: "/flows/public-profile",
    steps: ["Scan member QR", "Load public profile", "Respect privacy flags", "Connect / message"],
  },
  {
    title: "Connect with members",
    href: "/flows/connect",
    steps: ["Discover", "Send request", "Accept", "Conversation"],
  },
  {
    title: "Register for an event",
    href: "/flows/events",
    steps: ["Browse events", "Open detail", "Register", "Ticket / check-in QR"],
  },
  {
    title: "Access member benefits",
    href: "/flows/benefits",
    steps: ["Benefits list", "Detail & eligibility", "Redeem / access", "Track usage"],
  },
];

export default function FlowsPage() {
  return (
    <DesignChrome
      title="User journeys & flows"
      subtitle="Core paths for unregistered QR holders, members, and administrators. Click any journey for a detailed flowchart and linked screens."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        <Button render={<Link href="/flows/ia" />}>Information architecture</Button>
        <Button variant="outline" render={<Link href="/prototype/member/welcome" />}>
          Clickable prototype
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {journeys.map((j) => (
          <Link
            key={j.href}
            href={j.href}
            className="rounded-2xl border bg-card p-5 shadow-sm transition hover:border-primary/40"
          >
            <h2 className="font-display text-lg font-semibold">{j.title}</h2>
            <ol className="mt-3 space-y-2">
              {j.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </Link>
        ))}
      </div>
    </DesignChrome>
  );
}
