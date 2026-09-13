export const club = {
  name: "KIUTESA",
  shortName: "KIUTESA",
  fullName:
    "Kampala International University Technology Student Association",
  tagline: "One QR code. One digital identity. A complete club experience.",
  university: "Kampala International University",
  description:
    "KIUTESA — the Kampala International University Technology Student Association — is the home for tech students on campus. Members share a verified digital identity, connect with peers, and access events, resources, and member benefits.",
  logoLetter: "K",
};

export const currentMember = {
  id: "KIU-2026-0842",
  name: "Amara Okonkwo",
  displayName: "Amara O.",
  email: "amara.okonkwo@kiu.ac.ug",
  phone: "+256 700 014 882",
  bio: "Computer science junior focused on product design and community building. Always happy to connect over hackathons and mentorship.",
  faculty: "School of Computing and Information Technology",
  department: "Computer Science",
  course: "BSc Computer Science",
  year: "Year 3",
  graduationYear: "2027",
  role: "Membership Officer",
  status: "Active" as const,
  joined: "Sep 12, 2025",
  issued: "Sep 12, 2025",
  qrRef: "QR-A8F2-9K",
  skills: ["Product Design", "React", "Public Speaking", "Event Ops"],
  interests: ["Hackathons", "UX Research", "Mentorship", "Startups"],
  profileComplete: 82,
  verified: true,
  photoInitials: "AO",
  connections: 47,
  eventsAttended: 12,
  achievements: 6,
};

export const members = [
  {
    id: "KIU-2026-0711",
    name: "Jordan Lee",
    role: "Club President",
    department: "Business",
    course: "BBA Strategy",
    year: "Year 4",
    skills: ["Leadership", "Strategy"],
    interests: ["Consulting", "Community"],
    verified: true,
    photoInitials: "JL",
    mutual: 8,
  },
  {
    id: "KIU-2026-0550",
    name: "Priya Nair",
    role: "Events Lead",
    department: "Computer Science",
    course: "BSc CS",
    year: "Year 3",
    skills: ["Event Planning", "Design"],
    interests: ["Workshops", "UI"],
    verified: true,
    photoInitials: "PN",
    mutual: 5,
  },
  {
    id: "KIU-2026-0920",
    name: "Marcus Chen",
    role: "Member",
    department: "Engineering",
    course: "BEng Software",
    year: "Year 2",
    skills: ["Python", "ML"],
    interests: ["AI", "Research"],
    verified: true,
    photoInitials: "MC",
    mutual: 3,
  },
  {
    id: "KIU-2026-0334",
    name: "Sofia Alvarez",
    role: "Communications",
    department: "Media Studies",
    course: "BA Communications",
    year: "Year 3",
    skills: ["Writing", "Social Media"],
    interests: ["Branding", "Storytelling"],
    verified: true,
    photoInitials: "SA",
    mutual: 6,
  },
  {
    id: "KIU-2026-0188",
    name: "Noah Patel",
    role: "Member",
    department: "Computer Science",
    course: "BSc CS",
    year: "Year 1",
    skills: ["Java", "Algorithms"],
    interests: ["Competitive Programming"],
    verified: false,
    photoInitials: "NP",
    mutual: 1,
  },
];

export const events = [
  {
    id: "evt-1",
    title: "Spring Product Design Sprint",
    date: "Mar 28, 2026",
    time: "10:00 AM – 4:00 PM",
    venue: "Innovation Lab, Block C",
    category: "Workshop",
    seats: "18 of 40 left",
    status: "Registered" as const,
    featured: true,
    organizer: "Priya Nair",
  },
  {
    id: "evt-2",
    title: "Alumni Mentorship Mixer",
    date: "Apr 4, 2026",
    time: "6:00 PM – 8:30 PM",
    venue: "Student Union Hall",
    category: "Networking",
    seats: "Open",
    status: "Open" as const,
    featured: true,
    organizer: "Jordan Lee",
  },
  {
    id: "evt-3",
    title: "Career Pathways: Fintech",
    date: "Apr 12, 2026",
    time: "5:30 PM – 7:00 PM",
    venue: "Online · Zoom",
    category: "Career",
    seats: "Unlimited",
    status: "Open" as const,
    featured: false,
    organizer: "Career Committee",
  },
  {
    id: "evt-4",
    title: "Hack Night #9",
    date: "Feb 14, 2026",
    time: "7:00 PM – 11:00 PM",
    venue: "CS Lab 2",
    category: "Community",
    seats: "—",
    status: "Attended" as const,
    featured: false,
    organizer: "Marcus Chen",
  },
];

export const announcements = [
  {
    id: "ann-1",
    title: "Membership verification window opens Monday",
    author: "Membership Office",
    date: "Mar 10, 2026",
    priority: "Important" as const,
    unread: true,
    excerpt: "Please confirm your student details by Friday to keep Active status.",
  },
  {
    id: "ann-2",
    title: "Partner workshop seats released",
    author: "Events Team",
    date: "Mar 8, 2026",
    priority: "General" as const,
    unread: true,
    excerpt: "Design Sprint registration is live for verified members.",
  },
  {
    id: "ann-3",
    title: "New mentorship matching cycle",
    author: "Jordan Lee",
    date: "Mar 2, 2026",
    priority: "Leadership" as const,
    unread: false,
    excerpt: "Sign up to be matched with an alumni mentor this term.",
  },
];

export const benefits = [
  {
    id: "ben-1",
    title: "Verified digital membership",
    description: "Professional club profile and scannable membership card.",
    category: "Identity",
    eligibility: "All active members",
    howTo: "Claim your QR and complete profile verification.",
  },
  {
    id: "ben-2",
    title: "Member-only workshops",
    description: "Priority registration for design sprints, talks, and labs.",
    category: "Learning",
    eligibility: "Active members",
    howTo: "Register from Events while status is Active.",
  },
  {
    id: "ben-3",
    title: "Alumni mentorship matching",
    description: "Termly matching with alumni mentors in your field.",
    category: "Career",
    eligibility: "Year 2+ active members",
    howTo: "Opt in from Benefits → Mentorship.",
  },
  {
    id: "ben-4",
    title: "Partner learning discounts",
    description: "Configured partner offers published by club admins.",
    category: "Partners",
    eligibility: "As published per offer",
    howTo: "Redeem codes shown on each benefit detail page.",
  },
  {
    id: "ben-5",
    title: "Leadership pathways",
    description: "Apply for officer roles and project leads each semester.",
    category: "Community",
    eligibility: "Members in good standing",
    howTo: "Watch Announcements for open roles.",
  },
  {
    id: "ben-6",
    title: "Resource library access",
    description: "Templates, recordings, and career guides curated by the club.",
    category: "Resources",
    eligibility: "Active members",
    howTo: "Browse Resources Hub and bookmark items.",
  },
];

export const resources = [
  {
    id: "res-1",
    title: "Event runbook template",
    category: "Templates",
    author: "Events Team",
    date: "Jan 2026",
    type: "DOCX",
  },
  {
    id: "res-2",
    title: "Intro to product critique",
    category: "Workshops",
    author: "Priya Nair",
    date: "Feb 2026",
    type: "Recording",
  },
  {
    id: "res-3",
    title: "Internship CV checklist",
    category: "Career",
    author: "Career Committee",
    date: "Mar 2026",
    type: "PDF",
  },
  {
    id: "res-4",
    title: "Club brand guidelines",
    category: "Documents",
    author: "Communications",
    date: "Sep 2025",
    type: "PDF",
  },
];

export const notifications = [
  {
    id: "n1",
    title: "Connection request from Priya Nair",
    category: "Connections",
    time: "12m ago",
    unread: true,
  },
  {
    id: "n2",
    title: "Reminder: Design Sprint tomorrow",
    category: "Events",
    time: "2h ago",
    unread: true,
  },
  {
    id: "n3",
    title: "New announcement: verification window",
    category: "Announcements",
    time: "1d ago",
    unread: false,
  },
  {
    id: "n4",
    title: "Achievement unlocked: 10 events attended",
    category: "Recognition",
    time: "3d ago",
    unread: false,
  },
];

export const achievements = [
  {
    id: "a1",
    title: "Founding Cohort",
    date: "Sep 2025",
    type: "Milestone",
  },
  {
    id: "a2",
    title: "Workshop Facilitator",
    date: "Nov 2025",
    type: "Leadership",
  },
  {
    id: "a3",
    title: "Hack Night Contributor",
    date: "Feb 2026",
    type: "Participation",
  },
  {
    id: "a4",
    title: "10 Events Attended",
    date: "Mar 2026",
    type: "Badge",
  },
];

export const adminStats = {
  totalMembers: 1284,
  activeMembers: 1102,
  unclaimedQr: 216,
  claimedQr: 1284,
  suspended: 18,
  pendingVerification: 47,
  upcomingEvents: 6,
  recentRegistrations: 34,
};

export const qrCodes = [
  { ref: "QR-A8F2-9K", status: "Claimed", member: "Amara Okonkwo", batch: "Batch 14" },
  { ref: "QR-B1C3-2M", status: "Unclaimed", member: "—", batch: "Batch 15" },
  { ref: "QR-C9D4-7P", status: "Unclaimed", member: "—", batch: "Batch 15" },
  { ref: "QR-D2E8-1Q", status: "Suspended", member: "Noah Patel", batch: "Batch 12" },
  { ref: "QR-E5F1-4R", status: "Claimed", member: "Jordan Lee", batch: "Batch 10" },
  { ref: "QR-F7G6-8S", status: "Revoked", member: "—", batch: "Batch 09" },
];

export const faqs = [
  {
    q: "What happens when I claim a QR code?",
    a: "The code becomes permanently linked to your digital membership identity. Scanning it later opens your public profile or verification view.",
  },
  {
    q: "Can I transfer my QR to someone else?",
    a: "No. Claimed codes stay with the assigned member. Lost or compromised codes can be reported for admin-approved reassignment.",
  },
  {
    q: "Who can see my student number?",
    a: "By default, student numbers stay private. You control visibility in Settings → Privacy.",
  },
  {
    q: "Is this a university ID card?",
    a: "No. This is a KIUTESA club membership credential, not a government or university-issued identity document.",
  },
];

export type ScreenState =
  | "default"
  | "loading"
  | "empty"
  | "error"
  | "success"
  | "offline"
  | "denied"
  | "suspended";
