import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  Active: "bg-success/15 text-success border-success/30",
  Claimed: "bg-success/15 text-success border-success/30",
  Available: "bg-gold/15 text-gold border-gold/30",
  Unclaimed: "bg-gold/15 text-gold border-gold/30",
  Pending: "bg-warning/20 text-warning-foreground border-warning/40",
  Suspended: "bg-warning/20 text-warning-foreground border-warning/40",
  Expired: "bg-muted text-muted-foreground",
  Revoked: "bg-destructive/15 text-destructive border-destructive/30",
  Invalid: "bg-destructive/15 text-destructive border-destructive/30",
  Verified: "bg-primary/10 text-primary border-primary/25",
  Important: "bg-destructive/10 text-destructive border-destructive/20",
  Registered: "bg-primary/10 text-primary border-primary/25",
  Open: "bg-gold/15 text-gold border-gold/30",
  Attended: "bg-muted text-muted-foreground",
};

export function StatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("font-medium", styles[status] ?? "bg-muted", className)}
    >
      {status}
    </Badge>
  );
}
