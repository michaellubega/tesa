import { DesignChrome } from "@/components/design-chrome";

function Box({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border bg-card p-4">
      <h3 className="font-display font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>· {i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function IAPage() {
  return (
    <DesignChrome
      title="Information architecture"
      subtitle="Role-based sitemap and navigation model for the membership platform."
    >
      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold">Roles</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Box
            title="Unregistered QR holder"
            items={["Landing", "Claim QR", "Register", "Success / identity"]}
          />
          <Box
            title="Club member"
            items={[
              "Home",
              "Card & QR",
              "Profile",
              "Discover & Connections",
              "Events & Benefits",
              "Resources & Announcements",
              "Settings & Help",
            ]}
          />
          <Box
            title="Administrator"
            items={[
              "Dashboard",
              "QR Management",
              "Members",
              "Events / Benefits / Announcements",
              "Reports",
              "Roles & Permissions",
            ]}
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold">Member navigation</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border bg-card p-5">
            <p className="text-sm font-medium text-primary">Bottom nav (mobile)</p>
            <div className="mt-4 flex justify-between rounded-xl bg-muted/60 px-4 py-3 text-center text-xs font-medium">
              {["Home", "Discover", "Events", "Benefits", "Profile"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-5">
            <p className="text-sm font-medium text-primary">Overflow menu</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              My QR · Membership Card · Connections · Messages · Resources · Announcements ·
              Notifications · Achievements · Membership Status · Help · Settings
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold">Sitemap (member)</h2>
        <pre className="mt-4 overflow-x-auto rounded-2xl border bg-card p-5 font-mono text-xs leading-6 text-muted-foreground">
{`Welcome
├── Claim QR
│   └── Register (4 steps) → Success
├── Sign In → Home
Home
├── Membership Card / My QR
├── Profile → Edit Profile / Public Preview
├── Discover → Public Profile → Connect
├── Connections / Messages
├── Events → Event Detail → My Events
├── Benefits → Benefit Detail
├── Resources / Announcements / Notifications
├── Achievements / Membership Status
└── Help / Settings`}
        </pre>
      </section>
    </DesignChrome>
  );
}
