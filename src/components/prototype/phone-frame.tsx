import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
  showNotch = true,
}: {
  children: React.ReactNode;
  className?: string;
  showNotch?: boolean;
}) {
  return (
    <div className={cn("phone-frame mx-auto", className)}>
      {showNotch && <div className="phone-notch" aria-hidden />}
      <div className="flex min-h-[764px] flex-col pt-7">{children}</div>
    </div>
  );
}

export function ScreenScroll({
  children,
  className,
  withNav = false,
}: {
  children: React.ReactNode;
  className?: string;
  withNav?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex-1 overflow-y-auto px-4",
        withNav ? "pb-2" : "pb-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
