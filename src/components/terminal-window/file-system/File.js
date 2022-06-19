class FileSystem {
  children = new Map();
  parent = null;
  id = Math.floor(Math.random() * Date.now());

  constructor(name) {
    if (!name || typeof name !== "string" || !name.trim().length) {
      throw new Error("Must be a non-empty of String type");
    }

    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    if (!name || typeof name !== "string" || !name.trim().length) {
      throw new Error("Must be a non-empty of String type");
    }

    this.name = name;
  }

  get getId() {
    return this.id;
  }

  get getChildren() {
    return Array.from(this.children.values());
  }
}

const fileSystem = new FileSystem("test filesystem");
console.log(fileSystem.getName);
