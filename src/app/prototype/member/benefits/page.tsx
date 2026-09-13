import Link from "next/link";
import { ScreenHeader } from "@/components/prototype/screen-header";
import { MemberBottomNav } from "@/components/prototype/member-bottom-nav";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { benefits } from "@/lib/demo-data";

export default function BenefitsPage() {
  return (
    <>
      <ScreenScroll withNav className="pt-1">
        <ScreenHeader title="Member benefits" subtitle="Value configured by your club administrators" />
        <p className="mb-4 text-sm text-muted-foreground">
          Membership is more than a QR code — access the benefits your club actually provides.
        </p>
        <ul className="space-y-2">
          {benefits.map((b) => (
            <li key={b.id}>
              <Link href="/prototype/member/benefits/detail" className="block rounded-xl border bg-card p-4">
                <p className="text-xs font-medium text-teal">{b.category}</p>
                <p className="font-display font-semibold">{b.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </ScreenScroll>
      <MemberBottomNav />
    </>
  );
}
