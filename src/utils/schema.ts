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
  fullDescription: string;
  productManager: Member[];
  techLead: Member[];
  productDesigner: Member[];
  softwareDevelopers: Member[];
  featured: boolean;
}

export interface Info {
  chapterPicture: Image;
}

// avoids unnecessary resizing of SVGs
export function setImageHeight(src: string, height: number): string {
  if (src.endsWith(".svg")) {
    return src;
  }

  return `${src}?h=${height}`;
}

export interface Semester {
  season: string;
  year: number;
}

export function parseSemester(semester: string): Semester {
  const [season, yearString] = semester.split(" ");

  const year = parseInt(yearString);

  return { season, year };
}
