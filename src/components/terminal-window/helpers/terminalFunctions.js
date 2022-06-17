export const delay = (time) => {
  return new Promise((res) => setTimeout(res, time));
};

export const containerFocus = () => {
  const input = document.querySelector("#terminalInput");
  if (input) {
    input.focus();
    input.select();
  }
};
