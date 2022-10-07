import axios from "axios";

export function createProjects() {
  const response = [];
  axios
    .get("https://api.github.com/users/sujeev-uthayakumar/repos?per_page=30")
    .then(({ data }) => {
      for (const repository of data) {
        if (
          repository.description &&
          !repository.is_template &&
          !repository.fork &&
          repository.name !== "Sujeev-Uthayakumar"
        ) {
          let temp = {};
          temp["content"] = repository.description;
          temp["text"] = repository.name;
          response.push(temp);
        }
      }
    });
  console.log(response);
  return response;
}
