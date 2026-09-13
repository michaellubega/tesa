"use client";

import Link from "next/link";
import Image from "next/image";
import { club } from "@/lib/demo-data";
import { cn } from "@/lib/utils";
import { useClubBranding } from "@/components/club-branding";

export function ClubLogo({
  size = "md",
  showText = true,
  className,
}: {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}) {
  const { logoDataUrl } = useClubBranding();
  const sizes = {
    sm: "size-8 text-sm",
    md: "size-10 text-base",
    lg: "size-14 text-xl",
  };
  const px = { sm: 32, md: 40, lg: 56 }[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {logoDataUrl ? (
        <Image
          src={logoDataUrl}
          alt={`${club.name} logo`}
          width={px}
          height={px}
          unoptimized
          className={cn("rounded-xl object-contain bg-white shadow-sm", sizes[size])}
        />
      ) : (
        <div
          className={cn(
            "flex items-center justify-center rounded-xl bg-primary font-display font-semibold text-primary-foreground shadow-sm",
            sizes[size],
          )}
          aria-hidden
        >
          {club.logoLetter}
        </div>
      )}
      {showText && (
        <div className="leading-tight">
          <p className="font-display font-semibold tracking-tight">{club.name}</p>
          {size !== "sm" && (
            <p className="max-w-[16rem] text-xs text-muted-foreground">{club.fullName}</p>
          )}
        </div>
      )}
    </div>
  );
}

export function ClubMarkLink({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="inline-flex">
      <ClubLogo size="sm" />
    </Link>
  );
}
