import { FlowDiagram } from "@/components/flow-diagram";

export default function Page() {
  return (
    <FlowDiagram
      title="Flow: Claim a QR code"
      prototypeHref="/prototype/member/claim"
      nodes={[
        "Scan printed QR or open claim URL",
        "Resolve secure token → friendly QR reference",
        "Status = Available to Claim?",
        "Yes → Show benefits + Claim CTA",
        "New user? → Registration · Existing? → Sign in",
        "Bind QR to member identity (permanent)",
        "Issue digital membership + success screen",
      ]}
    />
  );
}
