"use client";
import { usePathname } from "next/navigation";
import { DesignChrome } from "@/components/design-chrome";
import { PrototypeAside } from "@/components/design-chrome";
import { adminScreens } from "@/lib/nav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <DesignChrome
      title="Administrator dashboard"
      subtitle="Responsive console for QR generation, membership ops, events, and reporting."
      className="max-w-[1400px]"
    >
      <div className="flex gap-8">
        <PrototypeAside items={adminScreens} current={pathname} />
        <div className="min-w-0 flex-1 overflow-x-auto">{children}</div>
      </div>
    </DesignChrome>
  );
}
