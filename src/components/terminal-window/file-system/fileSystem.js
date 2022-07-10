import { Tree } from "../helpers/treeFunctions";

// TODO Create tree for filesystem
export function createFileSystem() {
  const root = new Tree("root");

  root.createChildNode("welcome", false);
  root.createChildNode("about", false);
  root.createChildNode("projects", true);
  root.createChildNode("socials", true);
  root.createChildNode("skills", true);

  root.print();
}
