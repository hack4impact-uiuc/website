import { parseSemester, Project } from "./schema";

export interface SemesterProjects {
  featured?: Project;
  projects: Project[];
}

interface ProjectsInfo {
  projectMap: Record<string, SemesterProjects>;
  semesters: string[];
}

export function generateProjectsInfo(projects: Project[]): ProjectsInfo {
  const projectArrayMap: Record<string, Project[]> = {};
  const projectMap: Record<string, SemesterProjects> = {};
  const semesters: string[] = [];

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
        ? featuredProjects[Math.floor(Math.random() * featuredProjects.length)]
        : undefined;

    projectMap[semester] = {
      featured,
      projects: projects.filter((project) => project !== featured),
    };
  });

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
