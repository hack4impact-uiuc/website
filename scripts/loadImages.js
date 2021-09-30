import { readFile } from "fs";
import { promisify } from "util";
import { exec } from "child_process";

const execPromise = promisify(exec);
const readFilePromise = promisify(readFile);

async function run() {
  await execPromise("mkdir -p build/images/people");
  await execPromise("mkdir -p build/images/projects");

  await Promise.all([loadMemberImages(), loadProjectImages()]);
}

async function loadMemberImages() {
  const fileContents = await readFilePromise("build/server/members.json");

  const members = JSON.parse(fileContents.toString());
  const allMembers = members.active.concat(members.alumni);

  await Promise.all(allMembers.map(loadMemberImage));
}

async function loadProjectImages() {
  const fileContents = await readFilePromise("build/server/projects.json");
  const { semesters, projectMap } = JSON.parse(fileContents.toString());

  await Promise.all(
    semesters.map(async (semester) => {
      const { projects, featured } = projectMap[semester];

      const allSemesterProjects = projects.concat(featured ?? []);

      await Promise.all(allSemesterProjects.map(loadProjectImage));
    })
  );
}

async function loadMemberImage(member) {
  const url = `${member.picture.src}?h=1000&fmt=jpg`.replace("////", "//");
  const nameSnakeCase = member.name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/-/g, "");

  const filePath = `build/images/people/${nameSnakeCase}.jpg`;

  await execPromise(`curl -o ${filePath} ${url}`);

  console.log(`Loaded ${filePath}`);
}

async function loadProjectImage(project) {
  const imageSrc = project.headerImage?.src;

  if (imageSrc === undefined) {
    return;
  }

  const url = `${imageSrc}?h=1000&fmt=jpg`.replace("////", "//");
  const filePath = `build/images/projects/${project.slug}.jpg`;

  await execPromise(`curl -o ${filePath} ${url}`);

  console.log(`Loaded ${filePath}`);
}

run();
