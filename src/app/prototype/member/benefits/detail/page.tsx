import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Button } from "@/components/ui/button";
import { benefits } from "@/lib/demo-data";

const b = benefits[2];

export default function BenefitDetailPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Benefit" backHref="/prototype/member/benefits" />
      <p className="text-xs font-medium text-teal">{b.category}</p>
      <h2 className="font-display text-2xl font-semibold">{b.title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
      <dl className="mt-5 space-y-2 text-sm">
        <Row k="Eligibility" v={b.eligibility} />
        <Row k="How to access" v={b.howTo} />
        <Row k="Validity" v="Current academic term" />
        <Row k="Partner" v="Club alumni network (configurable)" />
      </dl>
      <p className="mt-4 text-xs text-muted-foreground">Terms: Benefit details and partners are published by administrators and may change each term.</p>
      <Button className="mt-6 w-full" render={<Link href="/prototype/member/benefits" />}>Opt in / claim</Button>
    </ScreenScroll>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border bg-card px-3 py-2">
      <dt className="text-xs text-muted-foreground">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
