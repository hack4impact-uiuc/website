import { parseSemester } from "./schema";
import type { Project } from "./schema";

export type SemesterProjects = {
  featured?: Project;
  projects: Project[];
};

export type ProjectsInfo = {
  projectMap: Record<string, SemesterProjects>;
  semesters: string[];
};

// Function copied from https://stackoverflow.com/a/12646864
export function shuffleArray(array: any[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function generateProjectsInfo(projects: Project[]): ProjectsInfo {
  // loop until valid configuration (no project is featured more than once) is generated
  // eslint-disable-next-line no-constant-condition
  while (true) {
    shuffleArray(projects);

    const projectArrayMap: Record<string, Project[]> = {};
    const projectMap: Record<string, SemesterProjects> = {};
    const semesters: string[] = [];

    const featuredSlugs = new Set<string>();
    let numFeatured = 0;

    projects.forEach((project) =>
      project.semester.forEach((semester) => {
        if (projectArrayMap[semester] !== undefined) {
          projectArrayMap[semester].push(project);
        } else {
          projectArrayMap[semester] = [project];
          semesters.push(semester);
        }
      })
    );

    semesters.forEach((semester) => {
      const projects = projectArrayMap[semester];
      const featuredProjects = projects.filter((project) => project.featured);

      const featured: Project | undefined =
        featuredProjects.length > 0
          ? featuredProjects[
              Math.floor(Math.random() * featuredProjects.length)
            ]
          : undefined;

      if (featured !== undefined) {
        numFeatured += 1;
        featuredSlugs.add(featured.slug);
      }

      projectMap[semester] = {
        featured,
        projects: projects.filter((project) => project !== featured),
      };
    });

    // if one project is featured in multiple semesters, the following numbers will differ
    if (featuredSlugs.size < numFeatured) {
      continue;
    }

    semesters.sort((a, b) => {
      const semA = parseSemester(a);
      const semB = parseSemester(b);

      if (semA.year === semB.year) {
        if (semA.season === semB.season) {
          return 0;
        }

        return semB.season < semA.season ? 1 : -1;
      }

      return semB.year - semA.year;
    });

    return { projectMap, semesters };
  }
}
