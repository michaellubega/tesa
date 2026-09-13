"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DesignChrome, PrototypeAside } from "@/components/design-chrome";
import { PhoneFrame } from "@/components/prototype/phone-frame";
import { memberScreens } from "@/lib/nav";

export default function MemberPrototypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isIndex = pathname === "/prototype/member";

  if (isIndex) {
    return <>{children}</>;
  }

  return (
    <DesignChrome
      title="Member experience"
      subtitle="Mobile-first screens in a device frame. Use the sidebar to jump between pages; bottom nav mirrors the product."
      className="max-w-[1400px]"
    >
      <div className="flex gap-8">
        <PrototypeAside items={memberScreens} current={pathname} />
        <div className="min-w-0 flex-1">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 lg:hidden">
            <p className="text-sm text-muted-foreground">Jump to screen</p>
            <select
              className="rounded-lg border bg-card px-3 py-2 text-sm"
              value={pathname}
              onChange={(e) => {
                window.location.href = e.target.value;
              }}
            >
              {memberScreens.map((s) => (
                <option key={s.href} value={s.href}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <PhoneFrame>{children}</PhoneFrame>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            <Link href="/prototype/member" className="underline-offset-2 hover:underline">
              All member screens
            </Link>
          </p>
        </div>
      </div>
    </DesignChrome>
  );
}
