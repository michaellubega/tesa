import Link from "next/link";
import { DesignChrome } from "@/components/design-chrome";
import { Button } from "@/components/ui/button";

export function FlowDiagram({
  title,
  subtitle,
  nodes,
  prototypeHref,
}: {
  title: string;
  subtitle?: string;
  nodes: string[];
  prototypeHref: string;
}) {
  return (
    <DesignChrome title={title} subtitle={subtitle ?? "Happy path with decision points for edge cases."}>
      <div className="mx-auto max-w-xl space-y-2">
        {nodes.map((node, i) => (
          <div key={`${node}-${i}`}>
            <div className="flow-node text-center font-medium">{node}</div>
            {i < nodes.length - 1 && <div className="flow-arrow">↓</div>}
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <Button render={<Link href={prototypeHref} />}>Open linked screens</Button>
        <Button variant="outline" render={<Link href="/flows" />}>
          All flows
        </Button>
      </div>
    </DesignChrome>
  );
}
