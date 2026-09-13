import { AlertCircle, Inbox, Loader2, WifiOff, ShieldOff, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ScreenState } from "@/lib/demo-data";

export function StatePanel({
  state,
  emptyTitle = "Nothing here yet",
  emptyBody = "When content is available, it will appear in this space.",
}: {
  state: ScreenState;
  emptyTitle?: string;
  emptyBody?: string;
}) {
  if (state === "default" || state === "success") return null;

  const map = {
    loading: {
      icon: Loader2,
      title: "Loading…",
      body: "Fetching the latest club data.",
      spin: true,
    },
    empty: {
      icon: Inbox,
      title: emptyTitle,
      body: emptyBody,
      spin: false,
    },
    error: {
      icon: AlertCircle,
      title: "Something went wrong",
      body: "We couldn’t load this screen. Try again in a moment.",
      spin: false,
    },
    offline: {
      icon: WifiOff,
      title: "You’re offline",
      body: "Check your connection to continue using club services.",
      spin: false,
    },
    denied: {
      icon: ShieldOff,
      title: "Permission required",
      body: "This area is only available to authorized club roles.",
      spin: false,
    },
    suspended: {
      icon: Ban,
      title: "Membership suspended",
      body: "Contact club support to review your account status.",
      spin: false,
    },
  } as const;

  const cfg = map[state];
  const Icon = cfg.icon;

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/40 px-6 py-16 text-center">
      <Icon className={`mb-3 size-8 text-muted-foreground ${cfg.spin ? "animate-spin" : ""}`} />
      <h3 className="font-display text-lg font-semibold">{cfg.title}</h3>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">{cfg.body}</p>
      {(state === "error" || state === "offline") && (
        <Button className="mt-4" size="sm">
          Retry
        </Button>
      )}
      {state === "suspended" && (
        <Button className="mt-4" size="sm" variant="outline">
          Contact support
        </Button>
      )}
    </div>
  );
}

export function StateSwitcher({
  value,
  onChange,
}: {
  value: ScreenState;
  onChange: (s: ScreenState) => void;
}) {
  const states: ScreenState[] = [
    "default",
    "loading",
    "empty",
    "error",
    "offline",
    "denied",
    "suspended",
  ];
  return (
    <div className="flex flex-wrap gap-1.5">
      {states.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          className={`rounded-full border px-2.5 py-1 text-xs capitalize ${
            value === s
              ? "border-primary bg-primary text-primary-foreground"
              : "bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
