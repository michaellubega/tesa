"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, Trash2 } from "lucide-react";
import { AdminShell } from "@/components/prototype/admin-shell";
import { useClubBranding } from "@/components/club-branding";
import { MembershipCard } from "@/components/prototype/membership-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { club } from "@/lib/demo-data";

export default function AdminSettingsPage() {
  const { logoDataUrl, setLogoDataUrl, primaryColor, setPrimaryColor } = useClubBranding();
  const inputRef = useRef<HTMLInputElement>(null);
  const [saved, setSaved] = useState(false);

  function onFile(file: File | null) {
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setLogoDataUrl(reader.result);
        setSaved(false);
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <AdminShell current="/prototype/admin/settings" title="Club settings">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="max-w-lg space-y-5">
          <div className="space-y-1.5">
            <Label>Club name</Label>
            <Input defaultValue={club.name} />
          </div>
          <div className="space-y-1.5">
            <Label>Full name</Label>
            <Input defaultValue={club.fullName} />
          </div>
          <div className="space-y-1.5">
            <Label>University</Label>
            <Input defaultValue={club.university} />
          </div>

          <div className="space-y-2">
            <Label>Club logo</Label>
            <p className="text-xs text-muted-foreground">
              Uploaded logo appears on digital membership cards (front & back) and in the app header.
            </p>
            <div className="flex items-center gap-4 rounded-xl border bg-card p-4">
              {logoDataUrl ? (
                <Image
                  src={logoDataUrl}
                  alt="Club logo preview"
                  width={64}
                  height={64}
                  unoptimized
                  className="size-16 rounded-xl border bg-white object-contain p-1"
                />
              ) : (
                <div className="flex size-16 items-center justify-center rounded-xl bg-primary font-display text-xl font-semibold text-primary-foreground">
                  {club.logoLetter}
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" size="sm" onClick={() => inputRef.current?.click()}>
                  <Upload className="size-4" />
                  Upload logo
                </Button>
                {logoDataUrl && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setLogoDataUrl(null);
                      setSaved(false);
                    }}
                  >
                    <Trash2 className="size-4" />
                    Remove
                  </Button>
                )}
              </div>
              <input
                ref={inputRef}
                type="file"
                accept="image/png,image/jpeg,image/svg+xml,image/webp"
                className="hidden"
                onChange={(e) => onFile(e.target.files?.[0] ?? null)}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="brand">Primary brand color</Label>
            <div className="flex gap-2">
              <Input
                id="brand"
                value={primaryColor}
                onChange={(e) => {
                  setPrimaryColor(e.target.value);
                  setSaved(false);
                }}
              />
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => {
                  setPrimaryColor(e.target.value);
                  setSaved(false);
                }}
                className="h-9 w-12 cursor-pointer rounded-md border bg-transparent p-1"
                aria-label="Pick brand color"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Support email</Label>
            <Input defaultValue="membership@kiutesa.org" />
          </div>

          <Button
            type="button"
            onClick={() => setSaved(true)}
          >
            Save settings
          </Button>
          {saved && (
            <p className="text-sm text-primary">Settings saved. Logo will show on member cards.</p>
          )}
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Card preview</p>
          <MembershipCard />
          <p className="mt-3 text-xs text-muted-foreground">
            Front face with your uploaded logo. Download both faces from Cards.
          </p>
        </div>
      </div>
    </AdminShell>
  );
}
