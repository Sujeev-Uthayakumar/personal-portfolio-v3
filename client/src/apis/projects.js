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
          temp["text"] = repository.description;
          temp["content"] = repository.html_url;
          response.push(temp);
        }
      }
    });

  return response;
}
