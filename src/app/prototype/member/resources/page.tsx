import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Input } from "@/components/ui/input";
import { resources } from "@/lib/demo-data";

export default function ResourcesPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Resources hub" backHref="/prototype/member/home" subtitle="Learning materials for members" />
      <Input placeholder="Search resources" className="mb-3" />
      <div className="mb-4 flex gap-2 overflow-x-auto text-xs">
        {["All", "Templates", "Workshops", "Career", "Documents"].map((c) => (
          <button key={c} type="button" className="shrink-0 rounded-full border bg-card px-3 py-1.5">{c}</button>
        ))}
      </div>
      <ul className="space-y-2">
        {resources.map((r) => (
          <li key={r.id} className="rounded-xl border bg-card p-3">
            <div className="flex justify-between gap-2">
              <p className="font-medium">{r.title}</p>
              <span className="text-xs text-muted-foreground">{r.type}</span>
            </div>
            <p className="text-xs text-muted-foreground">{r.category} · {r.author} · {r.date}</p>
          </li>
        ))}
      </ul>
    </ScreenScroll>
  );
}
