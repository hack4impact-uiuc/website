import type { IconType } from "$lib/components/Icon.svelte";

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
  homepageBannerText: string;
  homepageBannerUrl: string;
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
  visible: boolean;
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

export const Perk = {
  DIGITAL_BRANDING: {
    name: "Digital Branding",
    icon: "tag",
    description:
      "Feature your company’s name and logo on our website, event pages, and social media.",
  },
  RESUME_BOOK: {
    name: "Resume Book",
    icon: "book",
    description:
      "Gain access to our talented members via a digital resume book.",
  },
  PREMIUM_SESSION: {
    name: "Premium Session",
    icon: "chalkboard",
    description:
      "1 hour session for a presentation on topic of your choice, Q&A, and networking with our whole organization (in-person or virtual)",
  },
  MENTORSHIP: {
    name: "Mentorship",
    icon: "education",
    description:
      "Engineers, Product Managers, and/or Product Designers from the sponsoring company can be paired with our student teams to provide guidance and advice over the course of the semester.",
  },
  COFFEE_CHATS: {
    name: "Coffee Chats",
    icon: "coffee",
    description:
      "Opportunity to talk to our members in a more casual setting. Meet members in small groups for 30 minute Zoom sessions. We guarantee at least 20 members to sign up.",
  },
  VOLUNTEERING_EVENTS: {
    name: "Volunteering Events",
    icon: "volunteering",
    description:
      "Sponsor numerous Computer Science workshops ran by our members in underserved communities in the Chicago Metropolitan area",
  },
} satisfies Record<string, PerkType>;

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

export function titleCase(name: string) {
  const capitalizeAroundCharacter = (text: string, character: string) => {
    return text
      .split(character)
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join(character);
  };

  name = capitalizeAroundCharacter(name, " ");
  name = capitalizeAroundCharacter(name, "-");
  return name;
}
