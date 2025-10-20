// Centralized case studies data and types
import development from "@/assets/godwin.webp";
import ui from "@/assets/robby.webp";
import features from "@/assets/napoleon.webp";
import payperclick from "@/assets/sapana.webp";
import sapanaImg from "@/assets/sapana.png";
import uiclients from "@/assets/maxreez.webp";

export type CaseStudy = {
  id: number;
  title: string;
  category: string; // e.g., "Website", "Website • SEO", "Google Ads"
  description: string;
  image: string; // imported image path
  tags: string[];
  client?: string;
  year?: string;
  link: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Godwin Jeffery Ackah",
    category: "Website",
    description:
      "Tailor‑made academic portal for the KNUST Engineering Faculty—centralized access to course materials for students.",
    image: development,
    tags: ["Strikingly", "Content Design", "UX"],
    client: "KNUST Engineering",
    year: "2024",
    link: "https://learnwithjeffery.mystrikingly.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Mr. Robby",
    category: "Website • SEO",
    description:
      "Professional site with targeted SEO—boosted online visibility and sales through improved discovery and conversion.",
    image: ui,
    tags: ["SEO", "On‑page", "Local"],
    client: "Robby",
    year: "2024",
    link: "https://godisgreatproductions.mystrikingly.com/",
    featured: true,
  },
  {
    id: 3,
    title: "Napoleon Selection",
    category: "E‑commerce • Content • SEO",
    description:
      "Ongoing webshop updates, blog content, social management, SEO/SEA—driving organic traffic and sales growth.",
    image: features,
    tags: ["Content", "SEO", "SEA"],
    client: "Napoleon Selection",
    year: "2025",
    link: "https://npselectiongh.com/blog",
    featured: false,
  },
  {
    id: 4,
    title: "Sapana Lodge",
    category: "Google Ads",
    description:
      "Performance‑driven ad campaigns for eco‑tourism: 1.42K+ clicks and 68.5K impressions—driving direct bookings.",
    image: payperclick,
    tags: ["Google Ads", "CPC", "Travel"],
    client: "Sapana Lodge",
    year: "2025",
    link: "https://www.webbeezwork.com/case-studies",
    featured: true,
  },
  {
    id: 5,
    title: "Maxreez Arts",
    category: "Website",
    description:
      "Responsive gallery to present and market artwork—improved visibility and online sales through design and optimization.",
    image: uiclients,
    tags: ["Web Design", "E‑commerce", "Optimization"],
    client: "Maxreez Arts",
    year: "2023",
    link: "https://maxreezarts.mystrikingly.com/",
    featured: false,
  },
];

export const getCategories = (): string[] => {
  const unique = Array.from(new Set(caseStudies.map((c) => c.category)));
  unique.sort((a, b) => a.localeCompare(b));
  return ["All", ...unique];
};
