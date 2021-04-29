export interface Image {
  src: string;
  alt: string;
}

export interface Member {
  name: string;
  picture: Image;
  role: RoleName;
  linkedin: string;
  active: boolean;
  graduationYear: number;
}

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

export interface Project {
  name: string;
  subname: string;
  semester: string[];
  slug: string;
  summary: string;
  nonprofitDescription: string; // TODO: is this html?
  nonprofitUrl: string;
  nonprofitLogo: Image;
  accentColor: string;
  fullDescription: string;
  productManager: Member[];
  techLead: Member[];
  productDesigner: Member[];
  softwareDevelopers: Member[];
  featured: boolean;
  testimonial?: string;
  testimonialSourceName: string;
  testimonialSourceDescription: string;
}

export interface Info {
  chapterPicture: Image;
}

export interface Semester {
  season: string;
  year: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface Role {
  name: RoleName;
  description: string;
  open: boolean;
}

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
