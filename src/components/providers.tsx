"use client";

import { ThemeProvider } from "next-themes";
import { ClubBrandingProvider } from "@/components/club-branding";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ClubBrandingProvider>{children}</ClubBrandingProvider>
    </ThemeProvider>
  );
}
