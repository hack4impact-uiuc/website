export interface Image {
  src: string;
  alt: string;
}

export interface Member {
  name: string;
  picture: Image;
  role: string;
  linkedin: string;
  active: boolean;
  graduationYear: number;
}

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
  // fullDescription: richText??
  productManager: Member[];
  techLead: Member[];
  productDesigner: Member[];
  softwareDevelopers: Member[];
  featured: boolean;
}
