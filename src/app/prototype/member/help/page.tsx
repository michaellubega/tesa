import { ScreenHeader } from "@/components/prototype/screen-header";
import { ScreenScroll } from "@/components/prototype/phone-frame";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { faqs } from "@/lib/demo-data";

export default function HelpPage() {
  return (
    <ScreenScroll className="pt-1">
      <ScreenHeader title="Help & support" backHref="/prototype/member/settings" />
      <h2 className="mb-2 text-sm font-semibold">Frequently asked questions</h2>
      <Accordion>
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`q-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <h2 className="mb-2 mt-6 text-sm font-semibold">Contact club support</h2>
      <Textarea placeholder="Describe your issue (QR problems, registration, privacy…)" className="mb-3" />
      <Button className="w-full">Submit support request</Button>
    </ScreenScroll>
  );
}
