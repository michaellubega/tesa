# KIUTESA — QR Membership Design Prototype

Interactive **UI/UX design prototype** for the Kampala International University Technology Student Association digital membership platform.

> **One QR code. One digital identity. A complete club experience.**

This repository ships designs first: information architecture, user flows, a design system, and clickable member + admin screens. It is not the production backend.

## Club

**KIUTESA** — Kampala International University Technology Student Association at Kampala International University. The prototype uses realistic KIUTESA copy, membership cards, and admin workflows.

## What’s included

- Brand & design system (tokens, typography, components, light/dark)
- Information architecture and user journey maps
- Flows: claim QR, register, public profile, connect, events, benefits
- 25+ member mobile screens in a phone frame
- Administrator dashboard (QR, members, events, benefits, reports, roles)
- QR security states (unclaimed → revoked / invalid)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

## Prototype map

| Area | Path |
|------|------|
| Hub | `/` |
| Design system | `/design-system` |
| Flows & IA | `/flows`, `/flows/ia` |
| Member app | `/prototype/member` |
| Claim journey start | `/prototype/member/welcome` |
| Admin console | `/prototype/admin` |
| QR states | `/prototype/qr-states` |

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- next-themes (light/dark)
- qrcode.react (membership QR visuals)

## Next step (engineering)

After design review, implement auth, secure QR tokens, membership APIs, and persistence. Keep benefits and club branding admin-configurable — do not hard-code unapproved partner offers.
