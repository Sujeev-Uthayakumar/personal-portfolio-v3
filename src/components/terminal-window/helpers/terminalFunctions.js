export const delay = (time) => {
  return new Promise((res) => setTimeout(res, time));
};

export const containerFocus = () => {
  const input = document.querySelector("#terminalInput");
  if (input) {
    input.focus();
  }
};

// TODO Get values from a database
export const parseValue = (value) => {
  value = value[0].toLowerCase();
  switch (value) {
    case "welcome":
      return terminalData.welcome;
    case "about":
      return terminalData.about;
    case "projects":
      return terminalData.projects;
    case "socials":
      return terminalData.socials;
    case "skills":
      return terminalData.skills;
    case "all":
      return terminalData.all;
    default:
      return "Invalid command";
  }
};

const terminalData = {
  welcome: {
    text: "Welcome to my personal portfolio built with React and Spring Boot. Feel free to take a look around!",
  },
  about: {
    text: "Hey there, my name is Sujeev, a Software Engineering student at the Ontario Tech University. I'm currently in the 4th year of my program and working as a Software Developer Intern @ Celestica.",
  },
  projects: "dad",
  socials: [
    {
      linkedin: {
        href: "https://www.linkedin.com/in/sujeev-uthayakumar-83497b149/",
        text: "LinkedIn",
      },
    },
    {
      github: {
        href: "https://github.com/Sujeev-Uthayakumar",
        text: "GitHub",
      },
    },
  ],
  skills: {
    languages: {
      text: "C++, Python, Java, Javascript, Typescript, HTML, CSS",
    },
    databases: {
      text: "SQL, NoSQL, MongoDB, MySQL",
    },
    frameworks: {
      text: "Bootstrap 5, React.js, Express.js, Jest, Socket.io, Redux, Cypress, Angular, Spring Boot",
    },
    other: {
      text: "Node.js, Git, GitHub, GitLab, Maven, Linux, Junit, Heroku, Postman, Jenkins, Google Cloud Platform",
    },
  },
  all: "dawdawd",
};
