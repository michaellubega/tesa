export type NavItem = {
  title: string;
  href: string;
  description?: string;
  section: string;
};

export const designSections: { title: string; description: string; href: string }[] = [
  {
    title: "Brand & Design System",
    description: "Colors, typography, components, light & dark themes",
    href: "/design-system",
  },
  {
    title: "Information Architecture",
    description: "Sitemap, roles, and navigation model",
    href: "/flows/ia",
  },
  {
    title: "User Journeys & Flows",
    description: "QR claim, registration, profile, networking, events, benefits",
    href: "/flows",
  },
  {
    title: "Member Prototype",
    description: "Mobile-first screens for the full member experience",
    href: "/prototype/member",
  },
  {
    title: "Admin Prototype",
    description: "Dashboard, QR management, members, events, reports",
    href: "/prototype/admin",
  },
  {
    title: "QR Security States",
    description: "Unclaimed, claimed, suspended, revoked, invalid, lost",
    href: "/prototype/qr-states",
  },
];

export const memberScreens: NavItem[] = [
  { section: "Onboarding", title: "Welcome / Landing", href: "/prototype/member/welcome", description: "Club intro & CTAs" },
  { section: "Onboarding", title: "Claim QR", href: "/prototype/member/claim", description: "Unclaimed QR entry" },
  { section: "Onboarding", title: "Set card PIN", href: "/prototype/member/set-pin", description: "4-digit card protection" },
  { section: "Onboarding", title: "Registration", href: "/prototype/member/register", description: "Account password + profile" },
  { section: "Onboarding", title: "Registration Success", href: "/prototype/member/success", description: "Digital identity created" },
  { section: "Core", title: "Home Dashboard", href: "/prototype/member/home", description: "Central hub" },
  { section: "Core", title: "Membership Card", href: "/prototype/member/card", description: "Front & back" },
  { section: "Core", title: "Unlock card", href: "/prototype/member/unlock-card", description: "PIN to present card" },
  { section: "Core", title: "My QR Code", href: "/prototype/member/qr", description: "Share & fullscreen" },
  { section: "Core", title: "My Profile", href: "/prototype/member/profile", description: "Owner view" },
  { section: "Core", title: "Edit Profile", href: "/prototype/member/edit-profile", description: "Structured editing" },
  { section: "Networking", title: "Public Profile", href: "/prototype/member/public-profile", description: "Visitor after scan" },
  { section: "Networking", title: "Discover Members", href: "/prototype/member/discover", description: "Directory & filters" },
  { section: "Networking", title: "Connections", href: "/prototype/member/connections", description: "Requests & suggestions" },
  { section: "Networking", title: "Messages", href: "/prototype/member/messages", description: "Safe contact / chat" },
  { section: "Club Life", title: "Events", href: "/prototype/member/events", description: "Browse & register" },
  { section: "Club Life", title: "Event Detail", href: "/prototype/member/events/detail", description: "Agenda & check-in" },
  { section: "Club Life", title: "My Events", href: "/prototype/member/my-events", description: "Tickets & history" },
  { section: "Value", title: "Benefits", href: "/prototype/member/benefits", description: "Value proposition" },
  { section: "Value", title: "Benefit Detail", href: "/prototype/member/benefits/detail", description: "How to access" },
  { section: "Value", title: "Resources", href: "/prototype/member/resources", description: "Learning hub" },
  { section: "Value", title: "Announcements", href: "/prototype/member/announcements", description: "News & notices" },
  { section: "Account", title: "Notifications", href: "/prototype/member/notifications", description: "Activity center" },
  { section: "Account", title: "Achievements", href: "/prototype/member/achievements", description: "Recognition" },
  { section: "Account", title: "Membership Status", href: "/prototype/member/membership", description: "History & status" },
  { section: "Account", title: "Help & Support", href: "/prototype/member/help", description: "FAQ & tickets" },
  { section: "Account", title: "Settings", href: "/prototype/member/settings", description: "Privacy & security" },
];

export const adminScreens: NavItem[] = [
  { section: "Admin", title: "Dashboard", href: "/prototype/admin", description: "KPIs & quick actions" },
  { section: "Admin", title: "QR Management", href: "/prototype/admin/qr", description: "Generate, print, audit" },
  { section: "Admin", title: "Members", href: "/prototype/admin/members", description: "Verify & manage" },
  { section: "Admin", title: "Events", href: "/prototype/admin/events", description: "Create & attendance" },
  { section: "Admin", title: "Benefits", href: "/prototype/admin/benefits", description: "Configure offers" },
  { section: "Admin", title: "Announcements", href: "/prototype/admin/announcements", description: "Publish & schedule" },
  { section: "Admin", title: "Reports", href: "/prototype/admin/reports", description: "Analytics" },
  { section: "Admin", title: "Roles", href: "/prototype/admin/roles", description: "Permissions" },
];

export const memberBottomNav = [
  { label: "Home", href: "/prototype/member/home", icon: "home" },
  { label: "Discover", href: "/prototype/member/discover", icon: "users" },
  { label: "Events", href: "/prototype/member/events", icon: "calendar" },
  { label: "Benefits", href: "/prototype/member/benefits", icon: "gift" },
  { label: "Profile", href: "/prototype/member/profile", icon: "user" },
] as const;
