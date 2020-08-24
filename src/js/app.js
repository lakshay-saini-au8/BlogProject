import { find, checkValidHash } from "./utility";
import { fetchPost, fetchUser } from "./dataFetching";

const home = find("#home");
const allPost = find("#allPost");
const fullPost = find("#fullPost");

// home page rendering
const renderHome = () => {
  home.style.display = "block";
};

// all post rendering
const renderAllPost = () => {
  allPost.style.display = "block";
};

// fullPost rendering
const renderFullPost = () => {
  fullPost.style.display = "block";
};

// rendring HTML according to condition
const renderHtml = (hashValue) => {
  if (hashValue === "#home") {
    allPost.style.display = "none";
    fullPost.style.display = "none";
    fetchPost();
    fetchUser();
    renderHome();
  } else if (hashValue === "#allPost") {
    home.style.display = "none";
    fullPost.style.display = "none";
    renderAllPost();
  } else if (hashValue === "#fullPost") {
    allPost.style.display = "none";
    home.style.display = "none";
    renderFullPost();
  } else {
    window.location.hash = "#home";
  }
};

// function for window hash
window.addEventListener("hashchange", () => {
  checkValidHash();
  home.style.display = "none";
  allPost.style.display = "none";
  fullPost.style.display = "none";
  renderHtml(window.location.hash);
});

// inital check at loading
const init = () => {
  checkValidHash();
  renderHtml(window.location.hash);
};

init();
