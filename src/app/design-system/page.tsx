import { DesignChrome } from "@/components/design-chrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/status-badge";
import { MembershipCard } from "@/components/prototype/membership-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const colors = [
  { name: "Primary", varName: "bg-primary", note: "Club green — primary brand" },
  { name: "Gold", varName: "bg-gold", note: "KIU gold — secondary accent" },
  { name: "Success", varName: "bg-success", note: "Active / claimed" },
  { name: "Warning", varName: "bg-warning", note: "Pending / suspended" },
  { name: "Destructive", varName: "bg-destructive", note: "Error / revoked" },
  { name: "Muted", varName: "bg-muted", note: "Surfaces & helpers" },
];

export default function DesignSystemPage() {
  return (
    <DesignChrome
      title="Brand & Design System"
      subtitle="Reusable tokens and components for KIUTESA, using Kampala International University blue and gold."
    >
      <div className="space-y-12">
        <section>
          <h2 className="font-display text-xl font-semibold">Color tokens</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((c) => (
              <div key={c.name} className="flex items-center gap-3 rounded-xl border bg-card p-3">
                <div className={`size-12 rounded-lg ${c.varName}`} />
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold">Typography</h2>
          <div className="mt-4 grid gap-6 rounded-2xl border bg-card p-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Display · Outfit
              </p>
              <p className="font-display text-4xl font-semibold tracking-tight">
                Digital membership
              </p>
              <p className="mt-2 font-display text-2xl">One QR. One identity.</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Body · DM Sans
              </p>
              <p className="text-base leading-relaxed">
                Clear, accessible body copy for students and administrators. Use comfortable
                line length, strong contrast, and plain language for QR claiming and privacy
                controls.
              </p>
              <p className="mt-3 font-mono text-sm text-muted-foreground">
                Member ID · 2025-08-41310
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold">Components</h2>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Buttons & inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">University email</Label>
                  <Input id="email" placeholder="name@kiu.ac.ug" />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">Allow profile discovery</p>
                    <p className="text-xs text-muted-foreground">Appear in member directory</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status badges & progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Active", "Unclaimed", "Pending", "Suspended", "Revoked", "Verified"].map(
                    (s) => (
                      <StatusBadge key={s} status={s} />
                    ),
                  )}
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Profile completion</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <Progress value={82} />
                </div>
                <div className="flex gap-2">
                  <Badge>Workshop</Badge>
                  <Badge variant="secondary">Networking</Badge>
                  <Badge variant="outline">Career</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold">Membership card</h2>
          <div className="mt-4 grid max-w-3xl gap-4 md:grid-cols-2">
            <MembershipCard />
            <MembershipCard side="back" />
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold">Light & dark concepts</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use the theme toggle in the header. Light mode prioritizes airy campus energy;
            dark mode keeps KIU blue surfaces for evening events and QR display.
          </p>
          <Tabs defaultValue="a11y" className="mt-4">
            <TabsList>
              <TabsTrigger value="a11y">Accessibility</TabsTrigger>
              <TabsTrigger value="motion">Motion</TabsTrigger>
              <TabsTrigger value="responsive">Responsive</TabsTrigger>
            </TabsList>
            <TabsContent value="a11y" className="rounded-xl border bg-card p-4 text-sm">
              Minimum contrast for text and status colors; focus rings on all controls;
              touch targets ≥ 44px on mobile nav; status never conveyed by color alone
              (labels + icons).
            </TabsContent>
            <TabsContent value="motion" className="rounded-xl border bg-card p-4 text-sm">
              Subtle transitions on nav and card hover only. Celebrate registration with a
              short success animation; avoid decorative motion on admin tables.
            </TabsContent>
            <TabsContent value="responsive" className="rounded-xl border bg-card p-4 text-sm">
              Member experience is phone-first with bottom navigation. Admin is desktop-first
              with a collapsible sidebar and responsive tables. Same design tokens on both.
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </DesignChrome>
  );
}
