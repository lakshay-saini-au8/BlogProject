export const checkValidHash = () => {
  if (window.location.hash === "") {
    window.location.hash = "#home";
  } else {
    return true;
  }
};

export const find = (element) => {
  return document.querySelector(element);
};
