"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "kiutesa-club-branding";

type ClubBranding = {
  logoDataUrl: string | null;
  primaryColor: string;
};

type ClubBrandingContextValue = ClubBranding & {
  setLogoDataUrl: (url: string | null) => void;
  setPrimaryColor: (color: string) => void;
  ready: boolean;
};

const defaultBranding: ClubBranding = {
  logoDataUrl: null,
  primaryColor: "#0B6E4F",
};

const ClubBrandingContext = createContext<ClubBrandingContextValue | null>(null);

export function ClubBrandingProvider({ children }: { children: React.ReactNode }) {
  const [branding, setBranding] = useState<ClubBranding>(defaultBranding);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ClubBranding>;
        setBranding({
          logoDataUrl: parsed.logoDataUrl ?? null,
          primaryColor: parsed.primaryColor ?? defaultBranding.primaryColor,
        });
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const persist = useCallback((next: ClubBranding) => {
    setBranding(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore quota */
    }
  }, []);

  const setLogoDataUrl = useCallback(
    (logoDataUrl: string | null) => {
      persist({ ...branding, logoDataUrl });
    },
    [branding, persist],
  );

  const setPrimaryColor = useCallback(
    (primaryColor: string) => {
      persist({ ...branding, primaryColor });
    },
    [branding, persist],
  );

  const value = useMemo(
    () => ({ ...branding, setLogoDataUrl, setPrimaryColor, ready }),
    [branding, setLogoDataUrl, setPrimaryColor, ready],
  );

  return (
    <ClubBrandingContext.Provider value={value}>{children}</ClubBrandingContext.Provider>
  );
}

export function useClubBranding() {
  const ctx = useContext(ClubBrandingContext);
  if (!ctx) {
    throw new Error("useClubBranding must be used within ClubBrandingProvider");
  }
  return ctx;
}
