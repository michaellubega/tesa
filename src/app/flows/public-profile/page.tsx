import { FlowDiagram } from "@/components/flow-diagram";

export default function Page() {
  return (
    <FlowDiagram
      title="Flow: View a public profile"
      prototypeHref="/prototype/member/public-profile"
      nodes={[
        "Scan another member’s QR",
        "Validate token status (Active / Suspended / Revoked)",
        "If Active → load public profile fields only",
        "Hide private fields per privacy settings",
        "Show Connect / Message / Report actions",
      ]}
    />
  );
}
