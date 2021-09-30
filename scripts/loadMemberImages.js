import { readFile } from "fs";
import { promisify } from "util";
import { exec } from "child_process";

const execPromise = promisify(exec);
const readFilePromise = promisify(readFile);

async function run() {
  await execPromise("mkdir -p build/members");

  const fileContents = await readFilePromise("build/server/members.json");
  const members = JSON.parse(fileContents.toString());
  const allMembers = members.active.concat(members.alumni);

  await Promise.all(allMembers.map(loadMemberImage));
}

async function loadMemberImage(member) {
  const url = `${member.picture.src}?h=1000&fmt=jpg`.replace("////", "//");
  const nameSnakeCase = member.name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/-/g, "");

  const filePath = `build/members/${nameSnakeCase}.jpg`;

  await execPromise(`curl -o ${filePath} ${url}`);
  console.log(`Loaded ${filePath}`);
}

run();
