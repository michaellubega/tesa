import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { achievements } from "@/lib/demo-data";

export default function AchievementsPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Achievements" backHref="/prototype/member/home" subtitle="Recognition approved by administrators" />
      <div className="space-y-3">
        {achievements.map((a) => (
          <div key={a.id} className="rounded-xl border bg-card p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Badge variant="secondary">{a.type}</Badge>
                <p className="mt-2 font-display font-semibold">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.date}</p>
              </div>
              <Button size="sm" variant="outline">Share</Button>
            </div>
          </div>
        ))}
      </div>
    </ScreenScroll>
  );
}
