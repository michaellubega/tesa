import { FlowDiagram } from "@/components/flow-diagram";

export default function Page() {
  return (
    <FlowDiagram
      title="Flow: Access member benefits"
      prototypeHref="/prototype/member/benefits"
      nodes={[
        "Open Benefits hub",
        "Select benefit (admin-configured)",
        "Review eligibility & how to access",
        "Claim / redeem if applicable",
        "Track usage in membership history",
      ]}
    />
  );
}
