import axios from "axios";
import { Tree } from "../helpers/treeFunctions";

// TODO Add data for the file system
export async function createFileSystem() {
  const projectData = await createProjects();
  const root = new Tree("root");

  root.createChildNode("welcome", false);
  root.getChildNode("welcome").setData("Welcome to my personal portfolio");

  root.createChildNode("about", false);
  root
    .getChildNode("about")
    .setData(
      "Hello! My name is Sujeev Uthayakumar and i'm currently in the 3rd year Bachelors of Science in Software Engineering. I'm hoping to complete a further specialization into the Internet of Things (IOT). I love coding, and learning new languages and frameworks to further advance my abilities of software development. Currently, passionate about writing Python scripts for Raspberry Pi based computers. Anxious to learn and approach any new undertaking with an open mind. My future aspirations include becoming a fully realized software engineer, and plan to graduate in the 2023 graduation year. My desire is to continue learning and developing my abilities, to be able to create and cultivate new ideas through code."
    );
  // Project directory
  root.createChildNode("projects", true);
  for (let i = 0; i < projectData.length; i++) {
    const { name, description } = projectData[i];
    root.getChildNode("projects").createChildNode(name, false);
    root.getChildNode("projects").getChildNode(name).setData(description);
  }

  // Social directory
  root.createChildNode("socials", true);
  root.getChildNode("socials").createChildNode("linkedin", false);
  root
    .getChildNode("socials")
    .getChildNode("linkedin")
    .setData("https://www.linkedin.com/in/sujeev-uthayakumar-83497b149/");
  root.getChildNode("socials").createChildNode("github", false);
  root
    .getChildNode("socials")
    .getChildNode("github")
    .setData("https://github.com/Sujeev-Uthayakumar");

  // Skill directory
  root.createChildNode("skills", true);
  root.getChildNode("skills").createChildNode("backend", false);
  root.getChildNode("skills").createChildNode("frontend", false);
  root.getChildNode("skills").createChildNode("other", false);

  root.print();
  return root;
}

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
