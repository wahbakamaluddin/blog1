// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

// Blog post categories and competitions
export type Category = 'notes' | 'ctf' | 'general' | 'research';
export type Competition = 'wargames23' | 'hkcert24' | 'hkcert25' | 'curtinctf25' | 'other';

export const categories: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'notes', label: 'Notes' },
  { key: 'research', label: 'Research' },
  { key: 'ctf', label: 'CTF Writeups' },
  { key: 'general', label: 'General' },
];

export const competitions: { key: Competition | 'all'; label: string }[] = [
  { key: 'all', label: 'All CTF' },
  { key: 'wargames23', label: 'Wargames23' },
  { key: 'hkcert24', label: 'HKCERT24' },
  { key: 'hkcert25', label: 'HKCERT25' },
  { key: 'curtinctf25', label: 'CurtinCTF25' },
  { key: 'other', label: 'Other' },
];

export type SkillCategory = "Development" | "Security";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Education {
  institution: string;
  level: string;
  duration: string;
  date: string;
  grade: string;
  current: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  description?: string;
  link?: string;
  date: string;
  badge?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface SiteMetadata {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
}

export interface HomeContent {
  greeting: string;
  bio: string[];
  mobileHint: string;
  links: Record<string, string>; // Placeholder key -> URL
}

// =============================================================================
// SITE METADATA
// =============================================================================

export const siteMetadata: SiteMetadata = {
  name: "Wahba Kamaluddin",
  title: "Wahba Kamaluddin | Cybersecurity Student",
  description: "Portfolio and blog of Wahba Kamaluddin — cybersecurity student. Exploring web application security, Linux, and more.",
  keywords: [
    "cybersecurity",
    "CTF",
    "web security",
    "web development",
    "USIM",
    "Wahba Kamaluddin",
    "blog",
    "portfolio",
  ],
  author: "Wahba Kamaluddin",
  siteUrl: "https://wahbakamaluddin.dev",
};

// =============================================================================
// SKILLS DATA
// =============================================================================

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "Bash", category: "Development" },
  { name: "PHP", category: "Development" },
  { name: "JAVA", category: "Development" },
  { name: "C", category: "Development" },
  { name: "C++", category: "Development" },

  // Frameworks
  { name: "Next.js", category: "Development" },

  // Security Tools & Skills
  { name: "Web-App Security", category: "Security" },
  { name: "Digital Forensic", category: "Security" },
  { name: "Burp Suite", category: "Security" },
  { name: "OWASP ZAP", category: "Security" },
  { name: "Nmap", category: "Security" },
  { name: "Wireshark", category: "Security" },
  { name: "Metasploit", category: "Security" },
];

export const skillCategoryLabels: Record<SkillCategory, string> = {
  Development: "Development",
  Security: "Security",
};

export const skillCategoryOrder: SkillCategory[] = ["Security", "Development"];

// =============================================================================
// EDUCATION DATA
// =============================================================================

export const educations: Education[] = [
  {
    institution: "Universiti Sains Islam Malaysia (USIM)",
    level: "BCompSc Information Security and Assurance",
    duration: "4yrs",
    date: "Oct 2022 – Present",
    grade: "CGPA (current): 3.84/4.00",
    current: true,
  },
  {
    institution: "Korea Internet and Security Agency (KISA)",
    level: "ASEAN Cyber Shield Education",
    duration: "5mos",
    date: "Sep 2024 – Jan 2025",
    grade: "Excellence Award",
    current: false,
  },
  {
    institution: "Universiti Sains Islam Malaysia (USIM)",
    level: "Foundation in Science",
    duration: "1yr",
    date: "Jul 2021 – Jul 2022",
    grade: "CGPA: 3.79/4.00",
    current: false,
  },
  {
    institution: "Sekolah Menengah Kebangsaan Desa Cempaka",
    level: "Secondary School",
    duration: "5yrs",
    date: "Jan 2016 – Dec 2020",
    grade: "SPM: 11As, Valedictorian",
    current: false,
  },
];

// =============================================================================
// CERTIFICATIONS DATA
// =============================================================================

export const certifications: Certification[] = [
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/VGP17IIU43XM",
    date: "2025",
    badge: "/image/certificates/google-cybersecurity.png",
  },
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/de263913-c2a6-4500-91d2-ce8bfc052c38",
    date: "2025",
    badge: "/image/certificates/cisco-ethical-hacker.png",
  },
  {
    title: "Certificate of Excellence (ASEAN Cyber Shield 2024)",
    issuer: "Korea Internet and Security Agency (KISA)",
    link: "https://www.youtube.com/watch?v=bK6axYNI41A",
    date: "2025",
    badge: "/image/certificates/ACS-excellence.png",
  },
  {
    title: "Certified Appsec Practitioner (CAP)",
    issuer: "The SecOps Group",
    date: "2025",
    link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXRuAWPUhlG4OLxB+fpaC25Arrn3/alZRudTEfH7lVCQjl9mgh9oxEOE97Gkt+gXJnZBcyGIUubaPvRi2v4uLieM=",
    badge: "/image/certificates/cap.png",
  },
];

// =============================================================================
// PROJECTS DATA
// =============================================================================

export const projects: Project[] = [
  {
    id: 1,
    title: "Network Intrusion Detection System (NIDS)",
    description:
      "A lightweight anomaly-based NIDS for end devices using machine learning, developed in Python. It monitors network traffic in real-time to detect DoS, Port Scan, Brute Force, and Web Attack. The machine learning component is trained on CIC-IDS2017 dataset. Evaluated on Raspberry Pi 4B for resource efficiency.",
    image: "/image/projects/1.png",
    tags: ["Python", "Machine Learning", "Cybersecurity", "Networking"],
    github: "https://github.com/wahbakamaluddin/nids8",
  },
  {
    id: 2,
    title: "n8n-cryptobot",
    description:
      "An n8n workflow that analyzes crypto market sentiment and price movements to suggest buy or sell decisions with target prices, accessible via Telegram bot.",
    image: "/image/projects/2.png",
    tags: ["n8n", "Telegram", "Crypto", "ML trading"],
    github: "https://github.com/wahbakamaluddin/n8n-cryptobot",
  },
];
