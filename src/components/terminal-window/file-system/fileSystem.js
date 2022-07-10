import axios from "axios";
import { Tree } from "../helpers/treeFunctions";

// TODO Create tree for filesystem
export function createFileSystem() {
  const root = new Tree("root");

  root.createChildNode("welcome", false);
  root.createChildNode("about", false);

  // Project directory
  root.createChildNode("projects", true);

  // Social directory
  root.createChildNode("socials", true);
  root.getChildNode("socials").createChildNode("linkedin", false);
  root.getChildNode("socials").createChildNode("github", false);

  // Skill directory
  root.createChildNode("skills", true);
  root.getChildNode("skills").createChildNode("backend", false);
  root.getChildNode("skills").createChildNode("frontend", false);
  root.getChildNode("skills").createChildNode("other", false);

  root.print();
  createProjects();
}

// TODO Map the projects to the file directory
async function createProjects() {
  const response = [];
  const { data } = await axios.get(
    "https://api.github.com/users/sujeev-uthayakumar/repos?per_page=30"
  );

  for (const repository of data) {
    if (repository.description && !repository.is_template && !repository.fork) {
      response.push(repository);
    }
  }
  return response;
}
