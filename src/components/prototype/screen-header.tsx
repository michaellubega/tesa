import Link from "next/link";
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Button used for overflow action only

export function ScreenHeader({
  title,
  backHref,
  action,
  subtitle,
  className,
}: {
  title: string;
  backHref?: string;
  action?: React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-4 flex items-start gap-2 pt-2", className)}>
      {backHref ? (
        <Link
          href={backHref}
          aria-label="Back"
          className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg hover:bg-muted"
        >
          <ArrowLeft className="size-5" />
        </Link>
      ) : null}
      <div className="min-w-0 flex-1">
        <h1 className="font-display text-xl font-semibold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {action ?? (
        <Button variant="ghost" size="icon" className="shrink-0" aria-label="More">
          <MoreHorizontal className="size-5" />
        </Button>
      )}
    </header>
  );
}
