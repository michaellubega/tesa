import Link from "next/link";
import {
  ArrowRight,
  LayoutTemplate,
  Map,
  QrCode,
  Smartphone,
  Shield,
  Workflow,
} from "lucide-react";
import { DesignChrome } from "@/components/design-chrome";
import { ClubLogo } from "@/components/club-logo";
import { MembershipCard } from "@/components/prototype/membership-card";
import { Button } from "@/components/ui/button";
import { club } from "@/lib/demo-data";
import { designSections } from "@/lib/nav";

const icons = [LayoutTemplate, Map, Workflow, Smartphone, Shield, QrCode];

export default function HomePage() {
  return (
    <DesignChrome>
      <section className="grid items-center gap-10 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-sm font-medium text-gold">Design prototype · UI/UX first</p>
          <ClubLogo size="lg" className="mb-6" />
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {club.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            A polished, clickable design system for a university club membership platform —
            QR claiming, digital identity, networking, events, benefits, and admin tools.
            Review flows and screens before engineering begins.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" render={<Link href="/prototype/member/welcome" />}>
              Open member prototype
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/flows" />}>
              View user flows
            </Button>
            <Button size="lg" variant="ghost" render={<Link href="/prototype/admin" />}>
              Admin dashboard
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Member screens</dt>
              <dd className="font-display text-2xl font-semibold">25+</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Admin areas</dt>
              <dd className="font-display text-2xl font-semibold">9</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Themes</dt>
              <dd className="font-display text-2xl font-semibold">Light / Dark</dd>
            </div>
          </dl>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <MembershipCard />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sample digital membership card — club credential, not a university ID
          </p>
        </div>
      </section>

      <section className="border-t py-12">
        <h2 className="font-display text-2xl font-semibold">Design file sections</h2>
        <p className="mt-2 text-muted-foreground">
          Organized to match the brief: brand, flows, member experience, admin, and QR security.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designSections.map((section, i) => {
            const Icon = icons[i] ?? LayoutTemplate;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-2xl border bg-card p-5 shadow-sm transition hover:border-primary/40 hover:shadow-md"
              >
                <Icon className="mb-3 size-5 text-primary" />
                <h3 className="font-display font-semibold group-hover:text-primary">
                  {section.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border bg-primary px-6 py-8 text-primary-foreground md:px-10">
        <h2 className="font-display text-2xl font-semibold">Prototype journeys to click through</h2>
        <ol className="mt-4 grid gap-3 text-sm text-primary-foreground/90 md:grid-cols-2">
          <li>1. Landing → Claim QR → Set card PIN → Register (account password) → Success → Home</li>
          <li>2. Home → Membership Card → My QR → Public Profile</li>
          <li>3. Discover → Connect → Messages</li>
          <li>4. Events → Detail → My Events</li>
          <li>5. Benefits → Resources → Achievements</li>
          <li>6. Admin → Generate QR batch → Members → Reports</li>
        </ol>
        <Button
          className="mt-6 bg-white text-primary hover:bg-white/90"
          render={<Link href="/prototype/member/welcome" />}
        >
          Start the claim journey
        </Button>
      </section>
    </DesignChrome>
  );
}
