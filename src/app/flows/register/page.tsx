import { FlowDiagram } from "@/components/flow-diagram";

export default function Page() {
  return (
    <FlowDiagram
      title="Flow: Complete registration"
      prototypeHref="/prototype/member/register"
      nodes={[
        "Card PIN already set after QR claim",
        "Step 1 — Account (name, email, password for sign-in & profile edits, verify)",
        "Step 2 — Student info (number, faculty, course, year)",
        "Step 3 — Profile (photo, bio, skills, links)",
        "Step 4 — Summary + terms + privacy consent",
        "Confirm & claim QR",
        "Registration success / digital identity",
      ]}
    />
  );
}
