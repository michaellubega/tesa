import { FlowDiagram } from "@/components/flow-diagram";

export default function Page() {
  return (
    <FlowDiagram
      title="Flow: Connect with members"
      prototypeHref="/prototype/member/connections"
      nodes={[
        "Discover members (search / filters)",
        "Open public profile",
        "Send connection request",
        "Recipient: Accept or Decline",
        "Connected → optional conversation",
      ]}
    />
  );
}
