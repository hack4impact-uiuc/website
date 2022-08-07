import type { IconType } from "$components/Icon.svelte";

export type Image = {
  src: string;
  alt: string;
};

export type Member = {
  name: string;
  picture: Image;
  role: RoleName;
  linkedin: string;
  active: boolean;
  graduationYear: number;
  testimonial?: string;
};

export type TestimonialMember = Member & {
  testimonial: string;
};

type RoleName =
  | "Co-Founder"
  | "Co-Director"
  | "Community Director"
  | "External Director"
  | "Tech Director"
  | "Product Manager"
  | "Tech Lead"
  | "Academy Lead"
  | "Product Research Lead"
  | "Product Designer"
  | "Software Developer"
  | "Academy Member";

export type Project = {
  name: string;
  subname: string;
  semester: string[];
  slug: string;
  headerImage?: Image;
  summary: string;
  nonprofitDescription: string; // TODO: is this html?
  nonprofitUrl: string;
  nonprofitLogo: Image;
  logoWhite?: Image;
  accentColor: string;
  fullDescription: string;
  productManager: Member[];
  techLead: Member[];
  productDesigner: Member[];
  softwareDevelopers: Member[];
  featured: boolean;
  testimonial?: string;
  testimonialSourceName?: string;
  testimonialSourceDescription?: string;
  testimonialSourceImage?: Image;
  testimonialSourceType?: "Member" | "Nonprofit";
};

export type NonprofitTestimonialProject = Project & {
  testimonial: string;
  testimonialSourceName: string;
  testimonialSourceDescription: string;
  testimonialSourceType: "Nonprofit";
};

export type Info = {
  chapterPicture: Image;
  whereWeWork: Image;
  applicationBlurb: string;
  homepageAbout: Image;
  homepagePartnerships: Image;
};

export type Semester = {
  season: string;
  year: number;
};

export type FAQ = {
  question: string;
  answer: string;
  category: string;
};

export type Role = {
  name: RoleName;
  description: string;
  open: boolean;
};

export type ApplicationStep = {
  name: string;
  date?: string;
  description: string;
  icon: "Calendar" | "Form" | "Interview";
};

export type NonprofitStep = {
  name: string;
  description: string;
  order: number;
};

export type PerkType = {
  name: string;
  icon: IconType;
  description: string;
};

export const Perk: Record<string, PerkType> = {
  RESUME_BOOK: {
    name: "Resume Book",
    icon: "book",
    description:
      "Gain access to our talented members via a digital resume book.",
  },
  DIGITAL_BRANDING: {
    name: "Digital Branding",
    icon: "tag",
    description:
      "Feature your company’s name and logo on our website, event pages, and social media.",
  },
  STANDARD_SESSION: {
    name: "Standard Session",
    icon: "group",
    description:
      "45 min session for a presentation on topic of your choice, Q&A, and networking with 40 attendees over Zoom.",
  },
  PREMIUM_SESSION: {
    name: "Premium Session",
    icon: "chalkboard",
    description:
      "1 hour session for a presentation on topic of your choice, Q&A, and networking with 40 attendees over Zoom.",
  },
  COFFEE_CHATS: {
    name: "Coffee Chats",
    icon: "coffee",
    description:
      "Opportunity to talk to our members in a more casual setting. Meet members in small groups for 30 minute Zoom sessions. We guarantee at least 20 members to sign up.",
  },
  MENTORSHIP: {
    name: "Mentorship",
    icon: "education",
    description:
      "Engineers, Product Managers, and/or Product Designers from the sponsoring company can be paired with our student teams to provide guidance and advice over the course of the semester.",
  },
} as const;

// avoids unnecessary resizing of SVGs
export function setImageHeight(src: string, height: number): string {
  if (src.endsWith(".svg")) {
    return src;
  }

  return `${src}?h=${height}`;
}

export function parseSemester(semester: string): Semester {
  const [season, yearString] = semester.split(" ");

  const year = parseInt(yearString);

  return { season, year };
}

export function semesterToId(semester: string): string {
  return semester.split(" ").join("-").toLowerCase();
}
