import { FlowDiagram } from "@/components/flow-diagram";

export default function Page() {
  return (
    <FlowDiagram
      title="Flow: Register for an event"
      prototypeHref="/prototype/member/events"
      nodes={[
        "Browse upcoming / featured events",
        "Open event detail (agenda, seats, organizer)",
        "Register (membership Active check)",
        "Confirmation + ticket / code",
        "Optional QR check-in at venue",
      ]}
    />
  );
}
