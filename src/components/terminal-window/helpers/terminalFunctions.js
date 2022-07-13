export const delay = (time) => {
  return new Promise((res) => setTimeout(res, time));
};

export const containerFocus = () => {
  const input = document.querySelector("#terminalInput");
  if (input) {
    input.focus();
  }
};

export const parseValue = (value) => {
  if (value[0] === "ls") {
    return true;
  } else {
    return false;
  }
};
